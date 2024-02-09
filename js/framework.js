
/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024 
 */

function Framework() {
    console.log("constract");
    const routes = {};

    function getParams($path, $route) {
        $route = '/home/{id}/{name}';
        $path = '/home/id/name';

        $paths = $path.replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/')
        $routes = $route.replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/')
        //$queryes    = $routes?.map($item => $item.replace(/\{.+\}/,'(.+)'))

        if ($paths.length !== $routes.length) {
            retrun[];
        }
        var patt = new RegExp(/\{(.+)\}/)
        $params = [];
        for (var $i = 0; $i < $routes.length; $i++) {
            if (patt.test($routes[$i])) {
                $params[$routes[$i].replace('{', '').replace('}', '')] = $paths[$i] ?? null;
            }
        }
        return params ?? [];
    }
    function checkRoute(route) {
        url = 
    }
    function route(path, component) {
        params =
            routes[path] = component
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