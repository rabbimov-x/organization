import styled from "styled-components";

export const MissionStyle = styled.div`
width: 100%;
height: auto;
border-radius: 12px;
background-image: url(assets/images/png/project.png);
background-size: 100% 100%;

padding: 80px 48px 48px 48px;
@media (min-width: 1900px) {
    padding: 100px 68px 68px 88px;
    &> p{
        margin-top: 24px;
        padding-right: 50px;
    }
}
@media (min-width: 1500px) {
    padding-bottom: 60px;
    &> p{
        margin-top: 24px;
        padding: 0 25px;
    }
    &> button{
        margin-left: 25px;
    }
}
@media (max-width: 1200px) {
padding: 60px 38px 38px 38px;
}
@media (max-width: 992px) {
padding: 50px 34px 34px 34px;
}
@media (max-width: 767px) {
padding: 40px 24px 34px 34px;
}
@media  (min-width: 436px) and ( max-width: 576px) {
padding: 40px 34px 34px 40px;
&> p{
        margin-top: 24px;
       
    }
}
`

