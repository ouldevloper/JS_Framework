// app.js

import { AboutComponent } from "./components/about";





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
            const instance = component();
            

            appContainer.innerHTML = instance;
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

// const  AboutComponent = ()=> {
//     return `
//             <h1>About Us</h1>
//             <p>We are the creators of this SPA.</p>
//         `;
// }


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
// Define SPA routes




app.route('/', HomeComponent);
app.route('/about', AboutComponent);


app.start();

