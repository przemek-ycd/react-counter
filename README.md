# Task: Implement a Simple Counter in React

## Objective

The goal of this task is to help you understand the basics of React components, state management, and event handling. You will create a simple counter application that allows users to increment and decrement a counter value by clicking buttons.

## Requirements

### Create the Counter Component

- Inside the `src` folder, create a new file named `Counter.js`.
- Define a functional component named `Counter`.

### Implement State Management

- Use the `useState` hook to manage the counter state within the `Counter` component.
- Initialize the counter state to 0.

### Display the `Counter`

- In the `Counter` component, display the current value of the counter.

### Add Increment (+) and Decrement (-) Buttons

- Add two buttons to the Counter component: one for incrementing and one for decrementing the counter value.
- Each button should have an onClick event handler that updates the counter state accordingly.

### Handle Edge Cases

- Ensure the counter does not go below 0.

### Bonus

- Add a reset button that sets the counter back to 0.

## Help

If this is your first time with React ever, the `Counter.js` file is already there with some basic scaffolding to help you kick off. Otherwise you can delete this file and start from scratch!

Instructions:

Setup:

Ensure you have Node.js and npm installed.
Use Create React App to scaffold your project as mentioned above.
Creating Counter Component:

In Counter.js, define your functional component and use the useState hook:
javascript
Skopiuj kod
import React, { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count > 0 ? count - 1 : 0);

return (
<div>
<h1>Counter: {count}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
);
};

export default Counter;
Integrate Counter Component:

Open src/App.js and import the Counter component.
Render the Counter component inside the App component:
javascript
Skopiuj kod
import React from 'react';
import Counter from './Counter';

function App() {
return (
<div className="App">
<Counter />
</div>
);
}

export default App;
Run Your Application:

Ensure your development server is running (npm start) and open your browser to see your counter application in action.
Submission:

Ensure your code is properly formatted and commented.
Submit your project files, including the Counter.js and any other relevant files you modified.
By completing this task, you will gain a basic understanding of how to manage state and handle events in a React application.
