// app.js

class HomeComponent {
    // bind() {
    //     // Establish data binding
    //     const inputElement = document.querySelector('#input');
    //     const outputElement = document.querySelector('#output');
    //     inputElement.addEventListener('input', () => {
    //         this.data.message = inputElement.value;
    //     });
    //     // Update the UI when the data changes
    //     Object.defineProperty(this.data, 'message', {
    //         get: () => this.data.message,
    //         set: (newValue) => {
    //             outputElement.textContent = newValue;
    //         },
    //     });
    // }

    render() {
        return `
            <h1>Welcome to our SPA!</h1>
            <p>This is the home page.</p>
        `;
    }
}

class NotFoundComponent {
    bind() {

    }
    
    render() {
        return `
            <h1>Welcome to our SPA!</h1>
            <p>This is the home page.</p>
        `;
    }
}

class AboutComponent {
    bind() {

    }
    
    render() {
        return `
            <h1>Welcome to our SPA!</h1>
            <p>This is the home page.</p>
        `;
    }
}



// Initialize the framework
const app = new Framework();
// Define SPA routes




app.route('/', HomeComponent);
app.route('/about', AboutComponent);


app.start();

