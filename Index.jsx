import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './src/Assets/theme';

const Hot = hot(App);

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
            <Hot />
        </ThemeProvider>
    </BrowserRouter>, 
document.querySelector('#root'));