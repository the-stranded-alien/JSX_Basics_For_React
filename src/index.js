// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
// Function Based Component

function getButtonText() {
    return 'Click on Me !';
}

const App = () => {
    // const buttonText = "Click Me !";
    const buttonText = { text: 'Click Me Please.'};
    const style = { backgroundColor: 'blue', color: 'white' };
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name : </label>
            <input id="name" type="text" />
            {/* <button style={{ backgroundColor: 'blue', color: 'white' }}> {buttonText} </button> */}
            {/* <button style={style}> {getButtonText()} </button> */}
            <button style={style}> {buttonText.text} </button>
        </div>
    );
};

// Take the React Component and Show it on the Screen
ReactDOM.render(<App />, document.querySelector('#root'));