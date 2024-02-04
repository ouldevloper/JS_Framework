class DataBindingComponent {
    constructor() {
        this.data = {
            message: "Hello, Data Binding!",
        };
    }
    bind() {
        // Establish data binding
        const inputElement = document.querySelector('#input');
        const outputElement = document.querySelector('#output');
        inputElement.addEventListener('input', () => {
            this.data.message = inputElement.value;
        });
        // Update the UI when the data changes
        Object.defineProperty(this.data, 'message', {
            get: () => this.data.message,
            set: (newValue) => {
                outputElement.textContent = newValue;
            },
        });
    }
    render() {
        return `
            <h1>Data Binding Example</h1>
            <input id="input" type="text" value="${this.data.message}" />
            <p id="output">${this.data.message}</p>
        `;
    }
}