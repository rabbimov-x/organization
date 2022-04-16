import styled from "styled-components"

export const ArticliStyle = styled.div`
width: 100%;
height: fit-content;
overflow: hidden;
border-radius: 5px;
margin: 30px 0;
display: ${({display})=> display ? display : "block"};
background-color: var(--shade-1);
box-shadow: 0px 8px 16px rgba(25, 32, 56, 0.04);

.minHeight{
    min-height: 103px;
}
@media (min-width: 556px) {
  &> :nth-child(2){
    padding: ${({display})=> display == "flex" ? "5px 10px 25px 10px " : "10px"} ;
  }
}
@media (max-width: 556px) {
  &> :nth-child(2){
    padding: ${({display})=> display == "flex" ? "0px 0px 0 5px" : "10px"}  ;
 
  }
  
}
`

ArticliStyle.Img = styled.div`
width: ${({w})=> w ? w : "100%"};
height: ${({h})=> h ? h : "192px"};
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--shade-6);
border-radius: 8px;
&> img{
    width: auto;
    height: auto;
    min-width: 100%;
    max-width: 130%;
    min-height: 100%;
}

@media (min-width: 1556px){
  height:  ${({h})=> h === "auto" ? "auto" : "250px"};
}
@media (max-width: 956px){
height : 152px;  
}
@media (max-width: 556px){
height: ${({h})=> h ? h : "200px"};
width: ${({w})=> w ? `calc(${w} -92px)`   : "100% !important"};  
}

`