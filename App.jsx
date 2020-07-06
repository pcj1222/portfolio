import React, { Component } from 'react'
import { createGlobalStyle  } from 'styled-components';
import { Reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${Reset}
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
    body{
        font-family: 'spoqa', sans-serif !important;
        font-weight: 400 !important;
        h1{
            font-size: 40px;
            font-weight: 400;
        }
    }
`;


export default class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle/>
                <div>
                    <h1>안녕하세요</h1>
                </div>
            </>
        )
    }
}
