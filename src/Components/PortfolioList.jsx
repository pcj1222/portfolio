import React from 'react'
import { useParams } from 'react-router-dom';

const PortfolioList = ({contents}) => {
    let params = useParams();
    const pf_id = params.pf_id;
     
    let select_portfolio = {
        id: 0,
        text: ''
    }


    // console.log(contents)
    for (let i = 0; i < contents.length; i++) {
        if(contents[i].id === Number(pf_id)){
            select_portfolio = contents[i];
            break;
        }
    }

    return(
        <> 
            <h2>{select_portfolio.title}</h2>
            <p> {select_portfolio.text} </p>
            { select_portfolio.link && <p><a target="_blank" href={select_portfolio.link}>홈페이지</a></p> }
        </>
    )
}

export default PortfolioList;
