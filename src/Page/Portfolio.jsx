import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import PortfolioList from '../Components/PortfolioList';

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
    bottom:30px;
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
    border-radius: 3px;
    padding: 20px;
    transition: all .3s;
    border: 2px solid #e9e9e9;
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

const Portfolio = ({contents}) => {
    const cardPosition = () => {
        document.querySelectorAll('.item').forEach((v,i)=>{
            const width = v.clientWidth;
            const gutter = 20;
            const posX = (width + gutter) * i;

            //console.log(v, i, width, posX);
            v.style.left = `${posX}px`;
        })
    }
    
    useEffect(() => {
        cardPosition();
        return () => {
            //cleanup
        }
    }, [])
    
    const pfList = [];
    for (let i = 0; i < contents.length; i++) {
        pfList.push(
            <Item key={contents[i].id} className="item">
                <NavLink to={'/portfolio/'+contents[i].id}>
                    <h3>{contents[i].title}</h3>
                    <p>{contents[i].desc}</p>
                </NavLink>
            </Item>
        );
    }

    return (
        <>
            <Switch>
                <Route path="/portfolio/:pf_id">
                    <PortfolioList contents={contents} />
                </Route>
                <Route path="/">
                    기본페이지
                </Route>
            </Switch>

            <CardWrap>
                <Card>
                    {pfList}
                </Card>
            </CardWrap>
        </>
    )
}

export default Portfolio;

// export default class Portfolio extends Component {
//     let params = useParams();

//     cardPosition = () => {
//         document.querySelectorAll('.item').forEach((v,i)=>{
//             const width = v.clientWidth;
//             const gutter = 20;
//             const posX = (width + gutter) * i;

//             //console.log(v, i, width, posX);

//             v.style.left = `${posX}px`;
//         })
//     }

//     componentDidMount(){
//         this.cardPosition();
//     }

//     render() {
//         return (
//             <>
//                 <Content>
//                     <Switch>
//                         <Route path="/portfolio/1">11</Route>
//                         <Route path="/portfolio/2">22</Route>
//                         <Route>not</Route>
//                     </Switch>
//                 </Content>

//                 <CardWrap>
//                     <Card>
//                         {this.props.date.map((v,i)=>{
//                             return <Item key={v.id} className="item"><NavLink to={'/portfolio/'+v.id}>{v.text}</NavLink></Item>
//                         })}
//                     </Card>
//                 </CardWrap>
//             </>
//         )
//     }
// }
