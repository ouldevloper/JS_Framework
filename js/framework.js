

function Framework() {
    console.log("constract");
    const routes = {};

    function route(path, component) {
        routes[path] = component;
    }

    function start() {
        const navigateTo = () => {
            const path = window.location.hash.slice(1);
            const component = routes[path] || NotFoundComponent;
            const appContainer = document.querySelector('#app');
            const instance = new component();
            if (typeof instance.bind === 'function') {
                instance.bind();
            }
            appContainer.innerHTML = instance.render();
        };

        function navigate(path) {
            window.location.hash = path;
            navigateTo();
        }

        window.addEventListener('hashchange', navigateTo);
        navigateTo();

        return {
            navigate,
        };
    }

    return {
        route,
        start,
    };
}