import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './src/Assets/theme';

const Hot = hot(App);

ReactDOM.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <Hot />
        </ThemeProvider>
    </HashRouter>, 
document.querySelector('#root'));