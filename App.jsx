import React, { Component } from 'react';
import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';

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

const CardWrap = styled.div`
    position:relative;
`
const Card = styled.div`
    /* display: flex;
    align-items: flex-end;
    justify-content: center; */
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:250px;
    max-width: 1480px;
    margin:0 auto;
    overflow: hidden;
    /* min-height:100vh; */
`
const Item = styled.div`
    position:absolute;
    width:300px;
    height:100%;
    border: 1px solid #e9e9e9;
    border-radius: 3px;
    transition: all .3s;
    &:hover{
        box-shadow: 0 3px rgba(0,0,0,.3);
    }
    &:not(:hover){
        /* margin-top: 50px; */
    }
    a{
        display:block;
        width:100%;
        height:100%;
        &.active{
            color:red;
        }
    }
`
const Content = styled.section`
    max-width:1480px;
    margin:0 auto;
`


export default class App extends Component {
    state = {
        date: [
            {id:1, text: "1"},
            {id:2, text: "2"},
            {id:4, text: "3"},
            {id:5, text: "4"},
            {id:6, text: "5"},
            {id:7, text: "6"},
            {id:8, text: "7"},
            {id:9, text: "8"},
        ]
    }

    cardPosition = () => {
        document.querySelectorAll('.item').forEach((v,i)=>{
            const width = v.clientWidth;
            const gutter = 20;
            const posX = (width + gutter) * i;

            console.log(v, i, width, posX);

            v.style.left = `${posX}px`;
        })
    }

    componentDidMount(){
        this.cardPosition();
    }


    render() {
        return (
            <>
                <Content>
                    <Switch>
                        <Route path="/1">11</Route>
                        <Route path="/2">22</Route>
                        <Route>not</Route>
                    </Switch>
                </Content>
                

                <CardWrap>
                    <Card>
                        {this.state.date.map((v,i)=>{
                            return <Item key={v.id} className="item"><NavLink to={'/'+v.id}>{v.text}</NavLink></Item>
                        })}
                    </Card>
                </CardWrap>

                <Reset/>
                <GlobalStyle/>
            </>
        )
    }
}

