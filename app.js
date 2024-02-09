/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024
 */




// import { AboutComponent } from "./components/about";






function Framework() {
    console.log("constract");
    const routes = {};

    function getPath($path){
        return '/'+$path.replace(/\/+/g, '/').replace(/^\/|\/$/g, '')
    }
    function getParams($path, $route) {
        $paths = getPath($path).split('/')
        $routes = getPath($path).split('/')
        //$queryes    = $routes?.map($item => $item.replace(/\{.+\}/,'(.+)'))
        if ($paths.length !== $routes.length) {
            return [];
        }
        var patt = new RegExp(/\{(.+)\}/)
        $params = [];
        for (var $i = 0; $i < $routes.length; $i++) {
            if (patt.test($routes[$i])) {
                $params[$routes[$i].replace('{', '').replace('}', '')] = $paths[$i] ?? null;
            }
        }
        return $params ?? [];
    }


    
    function route($path, $component) {

        $path = getPath($path).split('/')
        console.log('1 - $path, routes[path]', $path, routes)
        routes[$path] = $component
    }

    function start() {
        const navigateTo = () => {
            const path = window.location.hash.slice(1);
            route = getPath(path)
            console.log(route, path, routes)
            const component = routes[route] || NotFoundComponent;
            const appContainer = document.querySelector('#app');
            const params = getParams(path, route)
            console.log('params : ', params);
            const instance = component(params);
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

const  AboutComponent = (params)=> {
    return `
            <h1>About Us ${parmas?.id}</h1>
            <p>We are the creators of this SPA.</p>
        `;
}


const HomeComponent = () => {
    return `
            <h1>Welcome to our SPA!</h1>
            <p>This is the home page.</p>
        `;
}

const NotFoundComponent = ()=>{
    return "Not Found";
}




// Initialize the framework
const app = new Framework();






app.route('/',      HomeComponent);
app.route('/about/{id}', AboutComponent);


app.start();

