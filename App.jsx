import React, { Component } from 'react';
import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import About from './src/Page/About';
import Portfolio from './src/Page/Portfolio';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'spoqa';
        font-weight: 400;
        src: url('/src/Assets/Fonts/Spoqa_Han_Sans_Regular.ttf'),
        url('/src/Assets/Fonts/Spoqa_Han_Sans_Regular.woff'),
        url('/src/Assets/Fonts/Spoqa_Han_Sans_Regular.woff2');
    }
    @font-face {
        font-family: 'spoqa';
        font-weight: 500;
        src: url('/src/Assets/Fonts/Spoqa_Han_Sans_Bold.ttf'),
        url('/src/Assets/Fonts/Spoqa_Han_Sans_Bold.woff'),
        url('/src/Assets/Fonts/Spoqa_Han_Sans_Bold.woff2');
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'spoqa', sans-serif ;
        color: #333;
        font-weight: 400 ;
        min-height:100vh;
        background-color: whitesmoke;
    }
    a{
        color: inherit;
        text-decoration:none;
    }
    img{
        max-width:100%;

    }
    svg{
        vertical-align: middle;
    }
    .switch-wrapper {
        position: relative;
    }
    
    .switch-wrapper > div {
        position: absolute;
        width:100%;
    }
    /* ::-webkit-scrollbar{
        display:none;
    } */
`;
const LayoutHeader = styled.header`
    display:flex;
    align-items: center;
    position: fixed;
    top:30px;
    right:0;
    left:0;
    width:100%;
    max-width: 1480px;
    margin: 0 auto;
    z-index: 99;
    h1{
        width:60px;
    }
    ul{
        display: flex;
        align-items: center;;
        justify-content: flex-end;
        margin-left: auto;
        li{
            a{
                position: relative;
                font-size:16px;
                font-weight: 500;
                padding:0 20px;
                &:after{
                    content:'';
                    display: block;
                    position: absolute;
                    bottom: -5px;
                    left:0;
                    right:0;
                    margin: 0 auto;
                    width: 0%;
                    height: 2px;
                    background-color: #615fd0;
                    transition: width .25s;
                }
                &.active{
                    color:#615fd0;
                    &:after{
                        width: calc(100% - 40px);
                    }
                }
            }
        }
    }
`
const Content = styled.section`
    max-width:1280px;
    margin:0 auto;
    padding-top: 150px;
`

class App extends Component {
    state = { 
        isLoading: true
    }

    componentDidMount(){
        this.setState({isLoading: false})
    }

    render(){
        return(
            <>
                {
                    this.state.isLoading 
                    ? "loading..." 
                    : 
                    <>
                        <LayoutHeader>
                            <h1><NavLink exact to="/"><img src="/src/Assets/Images/logo.png" alt=""/></NavLink></h1>
                            <ul>
                                <li><NavLink exact to="/">About</NavLink></li>
                                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            </ul>
                        </LayoutHeader>
                        <Content>
                            <AnimatedSwitch 
                                atEnter={{opacity:0, offset: -50}}
                                atLeave={{opacity:0, offset: 50}}
                                atActive={{opacity:1, offset: 0}}
                                mapStyles={(styles)=>({
                                    opacity: styles.opacity,
                                    transform: `translateY(${styles.offset}px)`
                                })}
                                className="switch-wrapper"
                            >
                                <Route exact path="/">
                                    <About />
                                </Route>
                                <Route path="/portfolio">
                                    <Portfolio />
                                </Route>
                            </AnimatedSwitch>
                        </Content>
                        <Reset/>
                        <GlobalStyle/>
                    </>
                }
                
            </>
        )
    }
}


export default App;

