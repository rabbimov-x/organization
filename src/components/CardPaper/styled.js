import styled from "styled-components"

export const CardStyle = styled.div`
width: 100%;
height: fit-content;
border-radius: 8px;
margin: 30px 0;
`

CardStyle.Img = styled.div`
overflow: hidden;
border-radius: 8px;
width: 100%;
background-color: var(--shade-6);
height: 192px;

@media (min-width: 1556px){
height: 350px;  
}
@media (max-width: 956px){
height: 252px;  
}
@media (max-width: 556px){
height: 152px;  
}
`