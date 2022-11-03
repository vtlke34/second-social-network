import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state from './state';
import App from './App';
import { addMessage, inputMessage, subscriber } from './state';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} inputMessage={inputMessage} />
        </React.StrictMode>
    );
}

rerender(state)

subscriber(rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
