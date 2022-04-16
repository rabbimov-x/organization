import styled from "styled-components";


export const  PersonStyled = styled.div`
width: 100%;
height: fit-content;
`
PersonStyled.Img = styled.div`
overflow: hidden;
border-radius: 8px;
width: 100%;
background-color: var(--shade-6);
height: 320px;
display: flex;
align-items: center;
justify-content: center; 

&> img{
    min-width: 100%;
    max-width: 130%;
    min-height: 100%;
}

@media (min-width: 1556px){
height: 370px;  
}
@media (max-width: 956px){
height: 252px;  
}
@media (max-width: 556px){
height: 202px;  
}
`