import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 30px;
    article{
        margin-bottom:30px;
        &::last-child{
            margin-bottom:0;
        }
    }
    h2{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    p{
        line-height: 1.35em;
    }
`

const year = () => {
    const startYear = 2014;
    const date = new Date();
    const year = date.getFullYear();
    return year - startYear;
}

export default class About extends Component {
    render() {
        return (
            <Container>
                <article>
                    <h2># 안녕하세요</h2>
                    <p>{year()}년차 웹퍼블리셔 박창재입니다.</p>
                    <p>저는</p>
                </article>

                <article>
                    <h2># 할 줄 알아요</h2>
                    <p>html5, css3, sass, javascript, jquery</p>
                </article>

                <article>
                    <h2># 지금은</h2>
                    <p>javascript, webpack, react</p>
                </article>

                <article>
                    <h2># 앞으로는</h2>
                    <p>typescript, node, vue</p>
                </article>
            </Container>
        )
    }
}
