import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Hot = hot(App);

ReactDOM.render(<BrowserRouter><Hot /></BrowserRouter>, document.querySelector('#root'));