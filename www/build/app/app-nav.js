/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class AppNav {
    render() {
        return (h("header", null,
            h("div", { class: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" },
                h("h5", { class: "my-0 mr-md-auto font-weight-normal" }, " @jedihacks "),
                h("nav", { class: "my-2 my-md-0 mr-md-3" },
                    h("a", { class: "p-2 text-dark", href: "3" }, "Features "),
                    h("a", { class: "p-2 text-dark", href: "3" }, "Features "),
                    h("a", { class: "p-2 text-dark", href: "3" }, "Features "),
                    h("a", { class: "p-2 text-dark", href: "3" }, "Features ")),
                h("a", { class: "btn btn-outline-primary", href: "#" }, " Sign Up"))));
    }
    static get is() { return "app-nav"; }
    static get style() { return ""; }
}

export { AppNav };
