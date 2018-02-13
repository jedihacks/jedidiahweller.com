/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class AppHome {
    render() {
        return (h("div", null,
            h("p", null,
                "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",
                h("a", { href: 'https://stenciljs.com' }, "stenciljs.com"),
                " to get started."),
            h("stencil-route-link", { url: '/profile/stencil' },
                h("button", null, "Profile page"))));
    }
    static get is() { return "app-home"; }
    static get style() { return "app-home div {\n  padding: 10px;\n}\n\napp-home button {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  outline: 0;\n  letter-spacing: .04em;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n\napp-home button:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  transform: translateY(1px);\n}"; }
}

class AppNav {
    render() {
        return (h("header", null,
            h("div", { class: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow" },
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

class MyApp {
    render() {
        return (h("div", { class: "row" },
            h("div", { class: "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light main-background" },
                h("div", { class: "container" },
                    h("div", { class: "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" },
                        h("div", { class: "card-deck mb-3 text-center" },
                            h("div", { class: "card mb-4 box-shadow" },
                                h("div", { class: "card-header" }, "2014 "),
                                h("div", { class: "card-body" },
                                    h("h5", { class: "card-title" }, "Founded Webjunto.com, hosted even in Dublin Ireland, and others"))),
                            h("div", { class: "card mb-4 box-shadow" },
                                h("div", { class: "card-header" }, "2014 "),
                                h("div", { class: "card-body" },
                                    h("h5", { class: "card-title" }, "Founded Webjunto.com, hosted even in Dublin Ireland, and others"))),
                            h("div", { class: "card mb-4 box-shadow" },
                                h("div", { class: "card-header" }, "2014 "),
                                h("div", { class: "card-body" },
                                    h("h5", { class: "card-title" }, "Founded Webjunto.com, hosted even in Dublin Ireland, and others"))))))),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route", { url: '/', component: 'app-home', exact: true }),
                    h("stencil-route", { url: '/profile/:name', component: 'app-profile' })))));
    }
    static get is() { return "my-app"; }
    static get style() { return "my-app h1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: var(--app-primary-color);\n  padding: 0 12px;\n}\n\nmy-app .btn {\n  float: right;\n}\n\nmy-app .main-background {\n  background-image: url(http://jedidiahweller.com/wp-content/uploads/2017/12/18238046_1328404087250403_7814498151750250838_o.jpg);\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #ffffff;\n}"; }
}

export { AppHome, AppNav, MyApp };
