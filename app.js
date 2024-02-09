/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024
 */




// import { AboutComponent } from "./components/about";






function Framework() {
    let routes = {};

    function getPath($path){
        return '/'+$path.replace(/\/+/g, '/').replace(/^\/|\/$/g, '')
    }
    function getParams($path, $route) {
        
        $paths = $path.split('/')
        $_routes = getPath($route).split('/')
        console.log($_routes, $paths)
        if ($paths.length !== $_routes.length) {
            console.log('Not found...');
            return [];
        }
        var patt = new RegExp(/\{(.+)\}/)
        $params = [];
        
        for (var $i = 0; $i < $_routes.length; $i++) {
            console.log($i);
            if (patt.test($_routes[$i])) {
                console.log('found')
                $params[$_routes[$i].replace('{', '').replace('}', '')] = $paths[$i] ?? null;
            }
        }
        return $params ?? [];
    }
    
    function route($path, $component) {
        routes[$path] = $component
    }

    function getRoute($path){   
        for(var route in routes){
            
            query  = route.replace(/\{(.+)\}/g, '(.+)').replace(/\//g, '\\/')
            var patt = new RegExp('^'+query+'$')
            if (patt.test($path)) {
                return {'compenent':routes[route], 'path':route};
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
            console.log(params)
            const instance = component(params??null);
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
            <h1>About Us ${params?.id}</h1>
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

