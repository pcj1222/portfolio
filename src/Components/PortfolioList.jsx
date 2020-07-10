import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyleDetail = styled.article`
    text-align: center; 
    padding-top: 60px;
    h2{
        font-size: 24px;
        margin-bottom:30px;
    }
    p{
        margin-bottom:15px;
    }
`

const PortfolioList = ({contents}) => {
    let params = useParams();
    const pf_id = params.pf_id;


    let select_portfolio = {
        id: 0,
        text: ''
    }
    for (let i = 0; i < contents.length; i++) {
        if(contents[i].id === Number(pf_id)){
            select_portfolio = contents[i];
            break;
        }
    }

    return(
        <StyleDetail> 
            <h2>{select_portfolio.title}</h2>
            <p> {select_portfolio.text} </p>
            { select_portfolio.link && <p><a target="_blank" href={select_portfolio.link}>홈페이지</a></p> }
        </StyleDetail>
    )
}

export default PortfolioList;
