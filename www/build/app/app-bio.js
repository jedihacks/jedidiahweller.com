/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class AppBio {
    render() {
        return (h("div", { class: "container pt-5" },
            h("div", { class: "row body" },
                h("div", { class: "col mx-3 body-img" }),
                h("div", { class: "col bio p-5" },
                    h("h2", { class: "bio" }, "About Jedidiah Weller "),
                    h("h1", { class: "bio" }, "Speaker, Developer"),
                    h("h1", { class: "bio" }, "Writer, & Co-Founder "),
                    h("div", { class: "row" }, " "),
                    h("div", { class: "col p-2" },
                        h("img", { src: "assets/img/ZigZag.png" })),
                    h("p", { class: "bio" },
                        "Jedi (Jedidiah) Weller is CO-CEO & Head of Technology at ",
                        h("a", { href: "www.webjunto.com" }, " Webjunto "),
                        ", a Design & Development agency providing customized services across the globe. In addition, Jedi is an entrepreneur, landlord, dog lover, and organizer of the ",
                        h("a", { href: "https://www.meetup.com/phillyjunto/" }, " Philadelphia Junto "),
                        ", one of the fastest growing meetups in Philly."),
                    h("p", { class: "bio" },
                        "Previously, Jedi has worked as Director of Operations @ Geekli.st in Silicon Valley, ",
                        h("a", { href: "http://www.unisys.com/" }, " Unisys Corporation "),
                        ", ",
                        h("a", { href: "https://www.agi.com/home" }, " Analytical Graphics Inc."),
                        ", and the Technological Institute of Crete, Greece. He served on the board of ",
                        h("a", { href: "http://kitchencred.org/" }, " Kitchen Cred"),
                        ", a Philadelphia non-profit 501(3)(c) that fosters youth through culinary exercises. He has been a speaker and mentor at technology events across the world, such as ",
                        h("a", { href: "http://loudwire.com/myles-kennedy-wins-best-vocalist-3rd-annual-loudwire-music-awards/" }, "SXSW (Slashathon)"),
                        ",",
                        h("a", { href: "https://www.eventbrite.com/e/geeklist-hack4good-05-global-dublin-ireland-tickets-10089697557#" }, " The Web Summit (#hack4good Dublin)"),
                        ", ",
                        h("a", { href: "https://hackduke2015.devpost.com/" }, " Duke University (#hackduke)"),
                        ", and ",
                        h("a", { href: "http://pennapps.com/" }, " University of Penn (Penn Apps)"),
                        ".")))));
    }
    static get is() { return "app-bio"; }
    static get style() { return "app-bio .body {\n  background-color: white;\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n}\n\napp-bio p.bio {\n  text-align: left;\n}\n\napp-bio h1.bio {\n  font-size: 30px;\n  font-weight: 600;\n  line-height: 40px;\n  text-align: left;\n  padding: 0;\n}\n\napp-bio h2.bio {\n  font-size: 16px;\n  line-height: 26px;\n  color: #bfbfbf;\n  text-align: left;\n}\n\napp-bio .body-img {\n  background-image: url(\"assets/img/jedi-panel.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: inline-block;\n}"; }
}

class AppEvents {
    render() {
        return (h("div", { class: "container pt-5 center" },
            h("h2", { class: "intro-header-text" }, " 2018 Events and Trips"),
            h("div", { class: "intro-header-text" }, " See Where Jedi's Heading Next"),
            h("div", { class: "row" },
                h("div", { class: "col-3" }, " January 4th "),
                h("div", { class: "col-6" }, " Filming Somewhere "),
                h("div", { class: "col-3" }, " Philadelphia PA "),
                h("div", { class: "col-3" }, " Watch Recording ")),
            h("div", { class: "row" },
                h("div", { class: "col-3" }, " January 4th "),
                h("div", { class: "col-6" }, " Filming Somewhere "),
                h("div", { class: "col-3" }, " Philadelphia PA "),
                h("div", { class: "col-3" }, " Watch Recording ")),
            h("div", { class: "row" },
                h("div", { class: "col-3" }, " January 4th "),
                h("div", { class: "col-3" }, " Filming Somewhere "),
                h("div", { class: "col-3" }, " Philadelphia PA "),
                h("div", { class: "col-3" }, " Watch Recording "))));
    }
    static get is() { return "app-events"; }
    static get style() { return "app-events h1 {\n  font-size: 30px;\n  font-weight: 600;\n  line-height: 40px;\n  text-align: left;\n  padding: 0;\n}\n\napp-events h2 {\n  font-size: 16px;\n  line-height: 26px;\n  color: #bfbfbf;\n  text-align: left;\n}"; }
}

class AppNav {
    render() {
        return (h("nav", { class: "navbar box-shadow flex-column flex-md-row p-3 px-md-4 sticky-top" },
            " ",
            h("a", { class: "my-0 mr-md-auto font-weight-normal", href: "https://www.twitter.com/jedihacks", target: "_blank" },
                " ",
                h("h5", null, " @jedihacks ")),
            h("div", { class: "my-2 my-md-0 mr-md-3" },
                h("a", { class: "p-2 text-dark", href: "3" }, "Recognition "),
                h("a", { class: "p-2 text-dark", href: "3" }, "About "),
                h("a", { class: "p-2 text-dark", href: "3" }, "Events "),
                h("a", { class: "p-2 text-dark", href: "3" }, "Contact "))));
    }
    static get is() { return "app-nav"; }
    static get style() { return ""; }
}

class MyApp {
    render() {
        return (h("div", null,
            h("div", { class: "container-fluid main-background" },
                h("div", { class: "row" },
                    h("div", { class: "col-2" }),
                    h("div", { class: "col-4 intro-header-text" }, " Meet Jedi."),
                    h("div", { class: "col-6" },
                        h("img", { class: "jedi-picture", src: "/assets/img/jedi_4_X2.png" }, " ")))),
            h("div", { class: "row px-3 pb-md-4 mx-auto text-center jedi-summary-cards" },
                h("div", { class: "card-deck mb-3 text-center" },
                    h("div", { class: "card m-4" },
                        h("div", { class: "card-header" }, " 2014 "),
                        h("div", { class: "card-body" },
                            h("h5", { class: "card-title" }, " Co-founded Webjunto.com "),
                            h("h5", null, " Philadelphia, Pennsylvania "))),
                    h("div", { class: "card m-4" },
                        h("div", { class: "card-header" }, " 2015 "),
                        h("div", { class: "card-body" },
                            h("h5", { class: "card-title" }, "Official Partner with Ionic Framework Internationally "))),
                    h("div", { class: "card m-4" },
                        h("div", { class: "card-header" }, " 2016 "),
                        h("div", { class: "card-body" },
                            h("h5", { class: "card-title" }, "Expanded Operations with first Global clients"))),
                    h("div", { class: "card m-4" },
                        h("div", { class: "card-header" }, " 2017 "),
                        h("div", { class: "card-body" },
                            h("h5", { class: "card-title" }, "Surpassed 1M In Annual Revenue"))))),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route", { url: '/', component: 'app-events', exact: true }),
                    h("stencil-route", { url: '/profile/:name', component: 'app-bio' })))));
    }
    static get is() { return "my-app"; }
    static get style() { return "my-app h1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: var(--app-primary-color);\n  padding: 0 0px;\n}\n\nmy-app .intro-header-text {\n  font-family: Quicksand;\n  font-size: 70px;\n  line-height: 70px;\n  font-weight: 700;\n  color: grey;\n  align-items: center;\n  text-align: center;\n  display: flex;\n}\n\nmy-app .intro-text {\n  font-family: Quicksand;\n  font-size: 24px;\n  color: white;\n}\n\nmy-app .main-background {\n  overflow-x: hidden;\n  background-image: url(\"/assets/img/confetti.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #ffffff;\n  height: 70vh;\n}\n\nmy-app .jedi-picture {\n  height: 70vh;\n}\n\nmy-app .jedi-summary-cards {\n  background-color: #3353df;\n}\n\nmy-app .card, my-app .card-header {\n  background-color: #3353df;\n  border-color: #3353df;\n  color: white;\n}\n\nmy-app .card-header {\n  font-family: Quicksand;\n  font-size: 28px;\n  font-weight: 700;\n}"; }
}

export { AppBio, AppEvents, AppNav, MyApp };
