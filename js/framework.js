
/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024 
 */

// function Framework() {
//     console.log("constract");
//     const routes = {};

//     function getParams($path, $route) {
//         $paths = $path.replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/')
//         $routes = $route.replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/')
//         //$queryes    = $routes?.map($item => $item.replace(/\{.+\}/,'(.+)'))
//         if ($paths.length !== $routes.length) {
//             return [];
//         }
//         var patt = new RegExp(/\{(.+)\}/)
//         $params = [];
//         for (var $i = 0; $i < $routes.length; $i++) {
//             if (patt.test($routes[$i])) {
//                 $params[$routes[$i].replace('{', '').replace('}', '')] = $paths[$i] ?? null;
//             }
//         }
//         return params ?? [];
//     }

//     function getRoute($path){
//         return $path.replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/')
//     }
    
//     function route($path, $component) {
//         $path = $path.replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/')
//         routes[$path] = $component
//     }

//     function start() {
//         const navigateTo = () => {
//             const path = window.location.hash.slice(1);
//             route = getRoute(path)
//             const component = routes[route] || NotFoundComponent;
//             const appContainer = document.querySelector('#app');
//             const params = getParams(path, routes[path])
//             const instance = new component(params);
//             if (typeof instance.bind === 'function') {
//                 instance.bind();
//             }
//             appContainer.innerHTML = instance.render();
//         };

//         function navigate(path) {
//             window.location.hash = path;
//             navigateTo();
//         }

//         window.addEventListener('hashchange', navigateTo);
//         navigateTo();

//         return {
//             navigate,
//         };
//     }

//     return {
//         route,
//         start,
//     };
// }