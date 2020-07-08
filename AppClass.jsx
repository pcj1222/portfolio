import React, { Component } from 'react';
import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './src/Page/Home';
import About from './src/Page/About';
import Portfolio from './src/Page/Portfolio';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'spoqa';
        font-weight: 400;
        src: url('./src/Assets/Fonts/Spoqa_Han_Sans_Regular.ttf'),
        url('./src/Assets/Fonts/Spoqa_Han_Sans_Regular.woff'),
        url('./src/Assets/Fonts/Spoqa_Han_Sans_Regular.woff2');
    }
    @font-face {
        font-family: 'spoqa';
        font-weight: 500;
        src: url('./src/Assets/Fonts/Spoqa_Han_Sans_Bold.ttf'),
        url('./src/Assets/Fonts/Spoqa_Han_Sans_Bold.woff'),
        url('./src/Assets/Fonts/Spoqa_Han_Sans_Bold.woff2');
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'spoqa', sans-serif ;
        color: #333;
        font-weight: 400 ;
    }
    a{
        font-size: 40px;
        font-weight: 400;
        color: inherit;
        text-decoration:none;
    }
`;

export default class App extends Component {
    state = {
        date: [
            {id:1, text: "???????첫뻔쨰"},
            {id:2, text: "255"},
            {id:3, text: "3"},
            {id:4, text: "4"},
            {id:5, text: "5"},
            {id:6, text: "6"},
            {id:7, text: "7"},
            {id:8, text: "8"},
        ]
    }

    render() {
        return (
            <>
                <div>
                    <ul>
                        <li><NavLink exact to="/">home</NavLink></li>
                        <li><NavLink to="/about">about</NavLink></li>
                        <li><NavLink to="/portfolio/1">portfolio</NavLink></li>
                    </ul>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/portfolio/1">
                        <Portfolio date={this.state.date} />                
                    </Route>
                </Switch>



                <Reset/>
                <GlobalStyle/>
            </>
        )
    }
}

