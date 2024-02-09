
/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024 
 */

function Framework() {
    console.log("constract");
    const routes = {};

    function getParams(){
        
    }
    function checkRoute(route){
        url = 
    }
    function route(path, component, params={}) {
        params = 
        routes[path] = {'component':component, 'params':params};
    }

    function start() {
        const navigateTo = () => {
            const path = window.location.hash.slice(1);
            const component = routes[path].component || NotFoundComponent;
            const appContainer = document.querySelector('#app');
            const params = routes[path].params ?? null
            const instance = new component(params);
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