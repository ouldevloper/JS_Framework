
export const HomeComponent = () => {
    let name = 'abdullah'; 
    const change = () => {
        console.log('called')
        name = value
    }
    return `
            <h1>Welcome to our SPA! ${name}</h1>
            <input value="${name}" type="text" onchange="change()"/>
            <p>This is the home page.</p>
        `;
}

