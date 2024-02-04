// app.js

// Initialize the framework
const app = new Framework();
// Define SPA routes
app.route('/', HomeComponent);
app.route('/about', AboutComponent);
app.route('/databinding', DataBindingComponent);
// Start the application
app.start();

framework.navigate('/about');