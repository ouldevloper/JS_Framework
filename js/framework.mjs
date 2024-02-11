
/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024 
 */
const NotFoundComponent = () => {
    return `
        <center><strong>Page Not Found ....</stronge></center>
    `;
}

export const redirect = (path) => {
    window.location.hash = path;
}

// export function useState(obj) {
//     let initialState = obj||null;
//     const reducer = fn => {}
//     return [initialState, reducer];
// }
const isFunction = value => typeof value === 'function';
export function useState(obj) {
    let initialState = obj;
    const reducer = fn => {
        let newState;
        if (isFunction(fn)) {
            newState = fn(initialState);
        } else {
            newState = fn;
        }
        Object.assign(initialState, newState);
    };
    return [initialState, reducer];
}


function Framework() {
    let routes = {};
    let middlewares = {};
    function getPath($path) {
        console.log('$path: ', $path)
        return '/' + $path?.replace(/\/+/g, '/').replace(/^\/|\/$/g, '')
    }

    function getParams($path, $route) {

        const $splitedPath = $path.split('/')
        const $splitedRoute = getPath($route).split('/')
        const $params = [];
        if ($splitedPath.length !== $splitedRoute.length) {
            return [];
        }
        var patt = new RegExp(/\{(.+)\}/)


        for (var $i = 0; $i < $splitedRoute.length; $i++) {
            if (patt.test($splitedRoute[$i])) {
                $params[$splitedRoute[$i].replace('{', '').replace('}', '')] = $splitedPath[$i] ?? null;
            }
        }
        return $params ?? [];
    }

    function route($path, $component) {
        routes[$path] = $component
    }
    function getRoute($path) {
        for (var route in routes) {

            let query = route.replace(/\{(.+)\}/g, '(.+)').replace(/\//g, '\\/')
            var patt = new RegExp('^' + query + '$')
            if (patt.test($path)) {
                return { 'compenent': routes[route], 'path': route };
            }
        }
        return ''
    }

    function start() {
        const navigateTo = () => {
            const path = getPath(window.location.hash.slice(1));
            const route = getRoute(path)
            const component = route['compenent'] || NotFoundComponent;
            const appContainer = document.querySelector('#app');
            const params = getParams(path, route['path'])
            const instance = component(params ?? null);
            if (typeof instance.bind === 'function') {
                instance.bind();
            }
            appContainer.innerHTML = instance;
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


export default Framework;