// Dependencies imported
import React from 'react'; // Single element
import ReactDOM from 'react-dom';

// Constant
const name = "Chelsea";

// Method
// Single render

// ReactDOM.render(What to show, Where to show it);
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

ReactDOM.render(
    <div>
        <h1>Hello</h1>
        <h2>{name}</h2>
        <p>This is a practise file</p>
        <ul>
            <li>
                Option 1
            </li>
            <li>
                Option 2
            </li>
            <li>
                Option 3
            </li>
        </ul>
        
        <p>
            if (name === 'Angela') {
            return 7;
        } else if (name === "Jack") {
            return 12;
        }
        </p>

    </div>,
    document.getElementById('root')
);
