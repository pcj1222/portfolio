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
        border: 8px solid #ebebeb;
    }
    a{
        color: inherit;
        text-decoration:none;
    }
`;
const LayoutHeader = styled.header`
    position: fixed;
    top:30px;
    right:0;
    left:0;
    width:100%;
    max-width: 1480px;
    margin: 0 auto;
    ul{
        display: flex;
        align-items: center;;
        justify-content: flex-end;
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
    max-width:1480px;
    margin:0 auto;
    padding-top: 80px;
`

const contents = [
    {id:1, title: "휴롬", desc: "desc", text: "text", link:"http://www.hurom.co.kr"},
    {id:2, title: "정토회", desc: "desc", text: "text", link: ""},
    {id:3, title: "S-Oil E-Biz", desc: "desc", text: "text", link:""},
    {id:4, title: "스낵월드", desc: "desc", text: "text", link:""},
    {id:5, title: "샘표", desc: "유지보수", text: "text", link:"https://www.sempio.com"},
    {id:6, title: "TK 정형외과", desc: "desc", text: "text", link:"http://toptk.co.kr/main.php"},
]

const App = () => {
    return(
        <>
            <LayoutHeader>
                <ul>
                    <li><NavLink exact to="/">home</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/portfolio">portfolio</NavLink></li>
                </ul>
            </LayoutHeader>

            <Content>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio contents={contents} />
                    </Route>
                </Switch>
            </Content>



            <Reset/>
            <GlobalStyle/>
        </>
    )
}

export default App;

