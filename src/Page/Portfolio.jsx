import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import PortfolioList from '../Components/PortfolioList';
import Masonry from 'react-masonry-component';

const ItemWrap = styled.div`
    position:relative;
    overflow:hidden;
`
const Item = styled.div`
    width: calc(50% - 20px);
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #ebebeb;
    margin: 0 20px 20px 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: auto;
    transition: box-shadow .25s;
    &:hover{
        box-shadow: 0 3px 10px rgba(0,0,0,.1);
    }
    a{
        display:block;
        width:100%;
        height:100%;
        /* padding: 20px; */
        transition: all .25s;
        &.active{
            box-shadow:inset 0 0 0 3px #615fd0;
        }
    }
`
const ItemDesc = styled.div`
    width:100%;
    height:100%;
    padding:30px;
    background: rgba(0,0,0,.5);
    color:white;
    text-align: center;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    h3{
        font-size: 22px;
        font-weight: 400;
        letter-spacing: -0.05em;
        margin-bottom: 10px;
    }
`

const masonryOptions = {
    transitionDuration: 250
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

const Portfolio = ({contents}) => {
    const childElements = contents.map(function(el){
        const [show, setShow] = useState(false);
        const mouseOver = () => {
            setShow(true);
        }
        const mouseLeave = () => {
            setShow(false);
        }
        
        return (
             <Item key={el.id} style={{'backgroundImage': `url(${el.src})`}} >
                <NavLink to={'/portfolio/'+el.id} onMouseEnter={mouseOver} onMouseLeave={mouseLeave} >
                    {/* {show && (
                        <ItemDesc>
                            <h3>{el.title}</h3>
                            <p>{el.desc}</p>
                        </ItemDesc>
                    )} */}
                </NavLink>
            </Item>
         );
    });

    return (
        <>
            <ItemWrap>
                <Masonry
                    className={''} // default ''
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={true} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {childElements}
                </Masonry>
            </ItemWrap>

            <div>
                <Switch>
                    <Route exact path="/portfolio">
                        <h2>
                            기본페이지
                        </h2>
                    </Route>
                    <Route path="/portfolio/:pf_id">
                        <PortfolioList contents={contents}/>
                    </Route>
                </Switch>
            </div>
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
