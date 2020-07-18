import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import * as Icon from 'react-feather';

const WrapDetail = styled.article`
    padding:0 30px;
    h2{
        font-size: 27px;
        font-weight: 600;
        margin-bottom: 30px;
        small{
            font-size: 80%;
            font-weight: 400;
            color: #aaa;
        }
        span{
            margin-right:10px;
            vertical-align: middle;
        }
    }
    
    div{
        display: inline-block;
        vertical-align: top;
        p{
            margin: 10px 0;
        }
    }
    p{
        margin-bottom:15px;
        span{
            vertical-align: middle;
        }
        &:last-child{
            margin-bottom: 0;
        }
    }
`
const Thumb = styled.div`
    margin:50px 0;
    width: 100%;
    text-align: center;
`;
const Desc = styled.div`
    display:block !important;
    p{
        padding-left:20px
    }
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

    const [thumbImg, setThumbImg] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setThumbImg(true);
        }, 500);
    }, [select_portfolio])
 

    return(
        <WrapDetail> 
            <>
                <h2>
                    <span>{select_portfolio.title}</span>
                    {select_portfolio.link && <a target="_blank" href={select_portfolio.link} title="새 창에서 열림"><Icon.ExternalLink /></a>}
                </h2>
                {select_portfolio.type && <p><Icon.CheckCircle size={14} /> <span>작업내용 : {select_portfolio.type}</span></p>}
                {select_portfolio.participation && <p><Icon.CheckCircle size={14} /> <span>참여도: {select_portfolio.participation}</span></p>}
                {select_portfolio.skill && <p><Icon.CheckCircle size={14} /> <span>사용기술: {select_portfolio.skill}</span></p>}
                {/* <div><Icon.CheckCircle size={14} /> <div>상세설명: <p>ㅅ</p></div></div> */}
                {
                    select_portfolio.descSet && 
                    <Desc>
                        <Icon.CheckCircle size={14} /> 상세설명: 
                        {select_portfolio.descSet.map((v,i)=> {return <p key={i}><Icon.Minus size={8} />  {v}</p>})}
                    </Desc>
                }

                { thumbImg === true ? 
                    select_portfolio.imgSet && select_portfolio.imgSet.map((v,i)=> {return <Thumb key={i}><img src={v}></img></Thumb> }) : 
                    null 
                }
            </>
        </WrapDetail>
    )
}

export default PortfolioList;
