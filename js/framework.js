

class Framework {
    constructor() {
        console.log("constract")
        this.routes = {};
    }
    route(path, component) {
        this.routes[path] = component;
    }
    start() {
        const navigateTo = () => {
            const path = window.location.hash.slice(1);
            const component = this.routes[path] || NotFoundComponent;
            const appContainer = document.querySelector('#app');
            const instance = new component();
            if(typeof instance.bind === 'function') {
                instance.bind()
            } 

            appContainer.innerHTML = instance.render();
        };
        const navigate = (path) => {
            window.location.hash = path;
            navigateTo();
        };
        window.addEventListener('hashchange', navigateTo);
        navigateTo();
        return {
            navigate,
        };
    }
}
