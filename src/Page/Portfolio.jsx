import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import PortfolioList from '../Components/PortfolioList';
import Masonry from 'react-masonry-component';
import { AnimatedSwitch } from 'react-router-transition';


const ItemWrap = styled.div`
    position:relative;
    overflow:hidden;
    padding: 0 20px;
`
const Item = styled.div`
    width: 100%;
    height: 160px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #ebebeb;
    margin: 0 0 20px 0;
    background-color: #fff;
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
        transition: all .25s;
        &.active{
            box-shadow:inset 0 0 0 3px #615fd0;
        }
    }

    @media ${(props) => props.theme.tablet} {
        width: calc(50% - 20px);
        margin: 0 10px 20px 10px;
    }
    @media ${(props) => props.theme.desktop} {
        width: calc(25% - 20px);
    }
`;
const masonryOptions = {
    transitionDuration: 250
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }



const Portfolio = () => {
    const contents = [
        {id:1, title: "휴롬", desc: "구축", text: "5?", link:"http://www.hurom.co.kr", src:"./src/Assets/Images/Thumb/hurom.png"},
        {id:2, title: "정토회", desc: "구축", text: "text", link: "", src:"./src/Assets/Images/Thumb/jungto.png"},
        {id:3, title: "샘표 연두", desc: "", text: "text", link:"http://yondu.co.kr/m", src:"./src/Assets/Images/Thumb/yondu.png"},
        {id:4, title: "샘표", desc: "유지보수", text: "text", link:"https://www.sempio.com", src:"./src/Assets/Images/Thumb/sempio.svg"},
        {id:5, title: "TK 정형외과", desc: "desc", text: "text", link:"http://www.toptk.co.kr", src:"./src/Assets/Images/Thumb/tk.png"},
        {id:6, title: "시력회복연구소", desc: "desc", text: "text", link:"http://www.eyerec.org/", src:"./src/Assets/Images/Thumb/eye.png"},
    ]

    const childElements = contents.map(function(content){
        return (
             <Item key={content.id} style={{'backgroundImage': `url(${content.src})`}} >
                <NavLink to={'/portfolio/'+content.id}></NavLink>
            </Item>
         );
    });

    return (
        <>
            <AnimatedSwitch 
                atEnter={{opacity:0, offset: -50}}
                atLeave={{opacity:0, offset: 50}}
                atActive={{opacity:1, offset: 0}}
                mapStyles={(styles)=>({
                    opacity: styles.opacity,
                    transform: `translateY(${styles.offset}px)`,
                })}
                className="switch-wrapper"
            >
                <Route exact path="/portfolio">
                    <h2>
                        기본페이지
                    </h2>
                    <ItemWrap>
                        <Masonry
                            className={''} 
                            elementType={'ul'} 
                            options={masonryOptions} 
                            disableImagesLoaded={false} 
                            updateOnEachImageLoad={false} 
                            imagesLoadedOptions={imagesLoadedOptions} 
                        >
                            {childElements}
                        </Masonry>
                    </ItemWrap>
                </Route>
                <Route path="/portfolio/:pf_id">
                    <PortfolioList contents={contents}/>
                </Route>
            </AnimatedSwitch>
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
