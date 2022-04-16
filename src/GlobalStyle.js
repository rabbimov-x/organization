import styled ,{ createGlobalStyle , css } from "styled-components";
import {styled as sty} from '@mui/material/styles';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import {ReactComponent as svg1} from './icons/Negative.svg'
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// const btncolor = (bg)=>{
//     switch(bg){
//         case "prim" : return "--primary";
//         break
//         case "secon" : return "--secondary";
//         break;
//         case "primbr" : return "transparent";
//         break;
//         case "trans" : return "--e-trans";
//         break;
//         default: return "--primary"
//     }
// }




const  allCommon = css`
width: ${({w})=>w? w : `100%`};
height: ${({h})=>h? h :`auto`}; 
position: ${({position})=>position? position : `relative`};
display: ${({display})=>display ? display : "block"};
flex-direction: ${({flex})=> flex? flex : "none"}; 
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left" }; 
align-items: ${({align})=>align? align: "" };
text-align: ${({textC})=>textC? textC : "left"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
color: ${({cl})=>cl? `var(${cl})` : "var(--cl-white)"}; 
`
const font = css`
font-family: ${({fontF})=> fontF ? `var(${fontF})` : "var(--familyR)"} ;
font-size: ${({size})=> size ? `var(${size})` : "var(--size16)"};
font-weight: ${({bold})=> bold ? bold : "700"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display ? display : "block"};
line-height: 120%;
`

export const  GlobalStyle = createGlobalStyle`
  
  body{
      width: 100%;
      overflow-x: hidden;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      background-color: red;
  }
  *{
      box-sizing: border-box;
  }
`
export const H1 = styled.h1`
${font}
color : ${({cl})=>cl ? `var(${cl})` : "var(--cl-white)"};
text-transform: uppercase;
text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
`

export const A = styled.a`
${allCommon}
width: ${({w})=>w? w : `fit-content`};
height: ${({h})=>h? h :`fit-content`};
text-decoration: none;
`

export const P = styled.p`
${font}
width: ${({w})=> w ? w : "" };
line-height: ${({line})=> line ? line : "160%" };
font-style: normal;
color : ${({cl})=>cl ? `var(${cl})` : "var(--shade-1)"};
flex: none;
order: 0;
flex-grow: 0;
`

export const Container = styled.div`
width: 100%;
display: ${({display})=>display ? display : "flex"};
flex-direction: ${({flex})=> flex? "column" : "none"};
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left"};
align-items: ${({align})=>align? "center": "" };
padding: ${({pd})=>pd? pd : "0"} 5%;
`
export const Col12 = styled.div`    
      ${allCommon}
      width: 100%;
      padding: ${({pd})=>pd? pd : "0 var(--mp15)"} ;
`
export const Col10 = styled(Col12)`
    width: 83.333%;
`
export const Col8 = styled(Col12)`
    width: 66.666%;
    @media (max-width: 956px) {
        width: 100%;
    }
`
export const Col6 = styled(Col12)`
    width: 50%;
    @media (max-width: 956px) {
        width: 80%;
        margin: 0 auto;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`
export const Col4 = styled(Col12)`
    width: 33.333%;
    @media (max-width: 956px) {
        width: 40%;
    }
    @media (max-width: 757px) {
        width: 50%;
    }
    @media (max-width: 576px) {
        width: 80%;
        margin: 0 auto;
        padding: 0 auto;
    }
`
export const Col3  = styled(Col12)`
    width: 25%;
    @media (max-width: 757px) {
        width: 33.333%;
    }
    @media (max-width: 576px) {
        width: 50%;
        margin: 0 auto !important;
        padding : 0 auto ;
    }
    
`
export const Div = styled.div`
${allCommon}
top: ${({top})=>top? top : ""};
left: ${({left})=>left? left : ""};
right: ${({right})=>right? right : ""};
bottom: ${({bottom})=>bottom? bottom : ""};
-webkit-box-align: none;
`

export const Buttons  = sty(LoadingButton)`
height: fit-content;
width: fit-content;
min-width: 0px;
padding: ${({pd})=>pd? pd : "var(--btn)"};
border-radius: 4px;
margin: ${({mr})=>mr? mr : "0"};
background-color:${({bg})=>bg ? `var(${bg})` : "var(--primary)"} ;
color:${({cl})=>cl? `var(${cl})` : "var(--shade-1)"}; 
text-transform:inherit;
font-weight: 500;
line-height: 120%;
font-size:${({size})=>size? `var(${size})` : "var(--siz16)"};
backdrop-filter: blur(80px);
&: hover{
    background-color:${({bg})=>bg ? `var(${bg})` : "var(--primary)"} ;
}
@media (max-width: 767px) {
    padding: 10px 20px;
}
`
Buttons.D = sty(Buttons)`
         line-height: 120%;
         border:  'none';
         width:fit-content;     
         padding: ${({pd})=>pd? pd : "var(--btn)"};
         border-radius: 4px;
         margin: ${({mr})=>mr? mr : "0"};
         text-transform: uppercase;
         box-shadow: 0 2px 5px 2px ${({bgimg})=> bgimg ? bgimg === "success" ? '    rgba(85, 239, 196,.3)': bgimg === "primary" ? 'rgba(52, 152, 219,.3)' : bgimg == "dark" ? 'rgba(44, 100, 80,.3)': "" : ""};
         cursor: pointer;
         color: #fff;
         background-size: 200%;
         transition: 0.4s;
         &:hover{
             background-position: right;
         }
         z-index: 1;    
         background-image: ${({bgimg})=> bgimg ? bgimg === "success" ? 'linear-gradient(45deg, var(--success) , var(--success), #16a085 )': bgimg === "primary" ? 'linear-gradient(135deg, var(--primary) , #2980b9, #9b59b6 )' : bgimg == "dark" ? 'linear-gradient(45deg, var(--shade-8) , #303952, #130f40 )': "none" : "blue"}  ;
`
Buttons.Wish = styled.button`
${font}
width: 38px;
height:38px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
border: none;
outline: none;
background: #FFFFFF;
border-radius: 50%;
background-color: var(--shade-1);
box-shadow: 0px 4px 8px rgba(25, 32, 56, 0.16);
overflow: hidden;
img{
    width:120%;
    height: auto;
}
`
Buttons.Back = styled(Buttons.Wish)`
svg{
    path{
        fill: var(--shade-6)
    }
}
&:hover{
    background-color: var(--secondary);
svg{
    path{
        fill: var(--shade-1)
    }
}
}
`



export const Line = styled.div`
${allCommon}
height: 0;
border: 0.6px solid #FFFFFF;
`

export const LinkA = styled.a`
text-decoration: none;
cursor: pointer;
font-family: var(  --family);
font-size: var(--size12);
font-weight: ${({bold})=> bold ? "600" : "500"};
display: flex;
align-items: center;
margin: ${({mr})=>mr? mr : "0 5px"};
color: ${({cl})=> cl ? `var(${cl})` : "var(--cl-white)"};
&:hover{
    color: var(--cl-red);
    fill:red;
}
`
export const Icon = styled.div`
`
// Svg larga stel berilgan

const common = css`
width: ${({w})=>w? `var(${w})` : `var(--icon-w24)`};
height: auto;
font-size:  ${({w})=>w? `var(${w})` : `var(--icon-w24)`}  !important;
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display? display : "block" };
 & path{
     fill: ${({cl})=>cl ? `var(${cl})` : `var(--shade-7)`};
     
 }
`

export const  Img = styled.div`
${allCommon}
border-radius: ${({br})=>br ? br : ""};
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
&> img{ 
    max-width: ${({mx})=>mx ? mx : "100%"};
    min-width: ${({mn})=>mn ? mn : "100%"};
    height: auto;
}
`
Icon.Twitter = styled(TwitterIcon)`
${common}
`
Icon.Facebook = styled(svg1)`
${common}
`
Icon.Email = styled(MailOutlineIcon)`
${common}
`
// Icon.LikeUmpty = styled(svg5)`
// ${common}
// `

// Icon.MoreP = styled(svg6)`
// ${common}
// `