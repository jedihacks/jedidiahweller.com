/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class AppBio {
    render() {
        return (h("div", { class: "container pt-5" },
            h("div", { class: "row second-body" },
                h("div", { class: "col mx-3 second-body-img" }),
                h("div", { class: "col bio px-5" },
                    h("h2", { class: "bio" }, "About Jedidiah Weller "),
                    h("h1", { class: "bio" }, "Thinker. Maker. Doer. "),
                    h("p", { class: "bio" }, "Jedi (Jedidiah) Weller is CO-CEO & Head of Technology at Webjunto, a Design & Development agency providing customized services across the globe. In addition, Jedi is an entrepreneur, landlord, dog lover, and organizer of the Philadelphia Junto, one of the fastest growing meetups in Philly."),
                    h("p", { class: "bio" }, "Previously, Jedi has worked as Director of Operations @ Geekli.st in Silicon Valley, Unisys Corporation, Analytical Graphics Inc., and the Technological Institute of Crete, Greece. He serves on the board of Kitchen Cred, a Philadelphia non-profit 501(3)(c) that fosters youth through culinary exercises. He has been a speaker and mentor at technology events across the world, such as SXSW (Slashathon), The Web Summit (#hack4good Dublin), Duke University (#hackduke), and University of Penn (Penn Apps)."),
                    h("h2", { class: "bio" }, " Past Discussion topics "),
                    h("ul", null,
                        h("li", null, " User Experience Design "),
                        h("li", null, " Design Thinking "),
                        h("li", null, " Community Building "),
                        h("li", null, " Prototyping "),
                        h("li", null, " Women in Tech "),
                        h("li", null, " Design Theory "),
                        h("li", null, " Psychology of Influence "),
                        h("li", null, " Diversity & Inclusion "),
                        h("li", null, " Bootstrapping a Startup "),
                        h("li", null, " Communication "))))));
    }
    static get is() { return "app-bio"; }
    static get style() { return "app-bio .second-body {\n  background-color: white;\n  height: 100vh;\n}\n\napp-bio p.bio {\n  text-align: justify;\n}\n\napp-bio h1.bio {\n  font-size: 40px;\n  line-height: 50px;\n  text-align: left;\n  padding: 0;\n}\n\napp-bio h2.bio {\n  font-size: 16px;\n  line-height: 26px;\n  color: #bfbfbf;\n  text-align: left;\n}\n\napp-bio .second-body-img {\n  max-height: 750px;\n  background-image: url(\"assets/img/jedi-center.png\");\n  background-position: center center;\n  object-fit: contain;\n  display: inline-block;\n}"; }
}

class AppEvents {
    render() {
        return (h("div", { class: "container pt-5 center" },
            h("div", { class: "intro-header-text" }, " Events & Trips"),
            h("div", { class: "row" },
                h("div", { class: "col-3" }, " January 4th "),
                h("div", { class: "col-3" }, " Filming Somewhere "),
                h("div", { class: "col-3" }, " Philadelphia PA "),
                h("div", { class: "col-3" }, " Watch Recording ")),
            h("div", { class: "row" },
                h("div", { class: "col-3" }, " January 4th "),
                h("div", { class: "col-3" }, " Filming Somewhere "),
                h("div", { class: "col-3" }, " Philadelphia PA "),
                h("div", { class: "col-3" }, " Watch Recording ")),
            h("div", { class: "row" },
                h("div", { class: "col-3" }, " January 4th "),
                h("div", { class: "col-3" }, " Filming Somewhere "),
                h("div", { class: "col-3" }, " Philadelphia PA "),
                h("div", { class: "col-3" }, " Watch Recording "))));
    }
    static get is() { return "app-events"; }
    static get style() { return ""; }
}

class AppNav {
    render() {
        return (h("header", null,
            h("div", { class: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow" },
                h("a", { class: "my-0 mr-md-auto font-weight-normal", href: "https://www.twitter.com/jedihacks", target: "_blank" },
                    " ",
                    h("h5", null, " @jedihacks ")),
                h("nav", { class: "my-2 my-md-0 mr-md-3" },
                    h("a", { class: "p-2 text-dark", href: "3" }, "Recognition "),
                    h("a", { class: "p-2 text-dark", href: "3" }, "About "),
                    h("a", { class: "p-2 text-dark", href: "3" }, "Events "),
                    h("a", { class: "p-2 text-dark", href: "3" }, "Contact ")))));
    }
    static get is() { return "app-nav"; }
    static get style() { return "header {\n  background-color: white;\n}"; }
}

class MyApp {
    render() {
        return (h("div", { class: "container-fluid main-background" },
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route", { url: '/', component: 'app-events', exact: true }),
                    h("stencil-route", { url: '/profile/:name', component: 'app-bio' })))));
    }
    static get is() { return "my-app"; }
    static get style() { return "my-app h1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: var(--app-primary-color);\n  padding: 0 12px;\n}\n\nmy-app .btn {\n  float: right;\n}\n\nmy-app .intro-body {\n  height: 90vh;\n  display: flex;\n  align-items: center;\n}\n\nmy-app .intro-header-text {\n  font-family: Quicksand;\n  font-size: 70px;\n  line-height: 70px;\n  font-weight: 700;\n  color: white;\n}\n\nmy-app .intro-text {\n  font-family: Quicksand;\n  font-size: 24px;\n  color: white;\n}\n\nmy-app .videoWrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  /* 16:9 */\n  padding-top: 25px;\n  height: 0;\n}\n\nmy-app .videoWrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nmy-app .main-background {\n  overflow-x: hidden;\n  background-image: url(\"/assets/img/jedi-w.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #ffffff;\n  height: 110vh;\n}"; }
}

export { AppBio, AppEvents, AppNav, MyApp };
