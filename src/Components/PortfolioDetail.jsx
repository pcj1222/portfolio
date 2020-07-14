import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const WrapDetail = styled.article`
    /* text-align: center;  */
    /* display:flex; */
    padding:0 30px;
    h2{
        font-size: 27px;
        font-weight: 600;
        margin-bottom: 20px;
        small{
            font-size: 80%;
            font-weight: 400;
            color: #aaa;
        }
    }
    p{
        margin-bottom:15px;
    }
`
const Thumb = styled.div`
    /* width: 40%; */
    margin:30px 0;
`
const Content = styled.div`
    /* flex: 1 0 auto; */
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
    
    console.log(select_portfolio)
    return(
        <WrapDetail> 
            <Content>
                <h2>휴롬 <small>(Hurom)</small> <a target="_blank" href={select_portfolio.link} title="새 창에서 열림">&gt;</a></h2>
                <p>- 반응형 웹사이트</p>
                <p>- 참여도: 90%</p>
                <p>- 사용기술: html, css, javascript, jquery</p>

                <Thumb>
                    { (select_portfolio.imgSet).map((v)=> {return <img src={v}></img> }) }
                    {/* <img src={select_portfolio.imgSet}></img> */}
                </Thumb>

                <p>??</p>

                {/* <h2>{select_portfolio.title}</h2>
                <p> {select_portfolio.text[0].text1} </p>
                <p> {select_portfolio.text[0].text2} </p>
                {select_portfolio.desc && <p>{select_portfolio.desc}</p>} 
                {select_portfolio.link && <p><a target="_blank" href={select_portfolio.link} title="새 창에서 열림">홈페이지</a></p>} */}
            </Content>
        </WrapDetail>
    )
}

export default PortfolioList;
