import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const WrapDetail = styled.article`
    /* text-align: center;  */
    display:flex;
    h2{
        font-size: 27px;
        font-weight: 600;
        margin-bottom:30px;
    }
    p{
        margin-bottom:15px;
    }
`
const Thumb = styled.div`
    width: 40%;
`
const Content = styled.div`
    flex: 1 0 auto;
`

const PortfolioList = ({contents}) => {
    let params = useParams();
    const pf_id = params.pf_id;

    let select_portfolio;
    for (let i = 0; i < contents.length; i++) {
        if(contents[i].id === Number(pf_id)){
            select_portfolio = contents[i];
            break;
        }
    }

    return(
        <WrapDetail> 
            <Thumb>
                thumb
            </Thumb>
            <Content>
                <h2>{select_portfolio.title}</h2>
                <p> {select_portfolio.text} </p>
                {select_portfolio.desc && <p>{select_portfolio.desc}</p>} 
                {select_portfolio.link && <p><a target="_blank" href={select_portfolio.link} title="새 창에서 열림">홈페이지</a></p>}
            </Content>
        </WrapDetail>
    )
}

export default PortfolioList;
