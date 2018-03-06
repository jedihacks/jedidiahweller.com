/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class AppProjects {
    render() {
        return (h("p", null, "Heya!"));
    }
    static get is() { return "app-projects"; }
    static get properties() { return { "name": { "type": String, "attr": "name" } }; }
    static get style() { return ""; }
}

export { AppProjects };
