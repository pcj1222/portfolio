import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
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
    const startYear = 2015;
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
                    {/* <p>안녕하세요!</p> */}
                    <p>{year()}년차 웹퍼블리셔 박창재입니다.</p>
                </article>

                <article>
                    <h2># 저는 지금</h2>
                    <p>프론트엔드 공부를 하고있습니다.</p>
                    <p>javascript, typescript, node, react, vue,</p>
                </article>
            </Container>
        )
    }
}
