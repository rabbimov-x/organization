import styled from "styled-components"



export const CtaStyled = styled.div`
width: 100%;
height: 384px;
overflow: hidden;
background-image: url(assets/images/png/Cta.png);
background-repeat: no-repeat;
background-size: 115% 105%;
background-position-x: center;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 12px;
position: relative;

@media (min-width: 1592px) {
    background-size: 115%;
    height: 500px;
    
}
@media (max-width: 992px) {
    background-size: 115% 115%;
}
@media (max-width: 767px) {
    background-size: auto 110%;
}
@media (max-width: 576px) {
    background-size: auto 110%;
}
@media (max-width: 400px) {
    background-size: auto 110%;
}
`

CtaStyled.Div = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: #0B0706;
mix-blend-mode: normal;
opacity: 0.5;
border-radius: 12px;
&> div{
    z-index: 2;
}
`
CtaStyled.Content = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
.content{
        width: 65%;
        min-height: 60%;
        height: fit-content;
    }
@media (min-width: 1592px) {
    background-size: 115%;
    height: 500px;
    .content{
        min-height: 60%;
        max-width: 80%;
    }
}
@media (max-width: 1400px) {
    .content{
        width: 65%;
        min-height: 70%;
        height: fit-content;
    }
}
@media (max-width: 1000px) {
    .content{
        width: 75%;
        min-height: 70%;
        height: fit-content;
        &> div{
            flex-direction: column;
            align-items: center;
        }
    }
}
`