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
    static get style() { return ""; }
}

class MyApp {
    render() {
        return (h("div", { class: "container-fluid" },
            h("div", { class: "main-background" },
                h("div", { class: "container" },
                    h("div", { class: "row intro-body" },
                        h("div", { class: "col" },
                            h("div", { class: "intro-header-text" }, " Meet Jedidiah Weller"),
                            h("p", { class: "intro-text" }, "He went from battling joblessness to founding Philly\u2019s Best Tech Workplace for Diversity. Liz continues to be a driving force for diversity and inclusion in tech as a globetrotting public speaker, mentor, meetup organizer, and civic hacker. "),
                            h("button", { class: "btn-primary" }, "Learn More")),
                        h("div", { class: "col" },
                            h("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/PJTZzGChGqM", frameborder: "0" })))),
                h("div", { class: "container" },
                    h("div", { class: "row px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" },
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
                                    h("h5", { class: "card-title" }, "Founded Webjunto.com, hosted even in Dublin Ireland, and others"))))),
                    " ")),
            " ",
            h("div", { class: "container pt-5" },
                h("div", { class: "row second-body" },
                    h("div", { class: "col mx-3 second-body-img" }),
                    h("div", { class: "col bio px-5" },
                        h("h1", { class: "bio" }, " Thinker. Maker. Doer. "),
                        h("p", { class: "bio" }, "Jedi (Jedidiah) Weller is CO-CEO & Head of Technology at Webjunto, a Design & Development agency providing customized services across the globe. In addition, Jedi is an entrepreneur, landlord, dog lover, and organizer of the Philadelphia Junto, one of the fastest growing meetups in Philly."),
                        h("p", { class: "bio" }, "Previously, Jedi has worked as Director of Operations @ Geekli.st in Silicon Valley, Unisys Corporation, Analytical Graphics Inc., and the Technological Institute of Crete, Greece. He serves on the board of Kitchen Cred, a Philadelphia non-profit 501(3)(c) that fosters youth through culinary exercises. He has been a speaker and mentor at technology events across the world, such as SXSW (Slashathon), The Web Summit (#hack4good Dublin), Duke University (#hackduke), and University of Penn (Penn Apps)."),
                        h("h1", { class: "bio" }, " Past Discussion topics "),
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
                            h("li", null, " Communication "))))),
            " ",
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route", { url: '/', component: 'app-home', exact: true }),
                    h("stencil-route", { url: '/profile/:name', component: 'app-profile' })))));
    }
    static get is() { return "my-app"; }
    static get style() { return "my-app h1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: var(--app-primary-color);\n  padding: 0 12px;\n}\n\nmy-app .red {\n  background-color: red;\n}\n\nmy-app .blue {\n  background-color: blue;\n}\n\nmy-app .btn {\n  float: right;\n}\n\nmy-app .intro-body {\n  height: 90vh;\n  display: flex;\n  align-items: center;\n}\n\nmy-app .intro-header-text {\n  font-family: Quicksand;\n  font-size: 70px;\n  line-height: 70px;\n  font-weight: 700;\n  color: white;\n}\n\nmy-app .intro-text {\n  font-family: Quicksand;\n  font-size: 24px;\n  color: white;\n}\n\nmy-app .second-body {\n  background-color: white;\n  height: 100vh;\n}\n\nmy-app p.bio {\n  text-align: justify;\n}\n\nmy-app h1.bio {\n  font-size: 40px;\n  line-height: 50px;\n  text-align: center;\n}\n\nmy-app .second-body-img {\n  max-height: 750px;\n  background-image: url(\"assets/img/jedi-center.png\");\n  background-position: center center;\n  object-fit: contain;\n  display: inline-block;\n}\n\nmy-app .main-background {\n  overflow-x: hidden;\n  background-image: url(\"/assets/img/jedi-left.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #ffffff;\n  height: 110vh;\n}"; }
}

export { AppHome, AppNav, MyApp };
