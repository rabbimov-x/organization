import styled from "styled-components"


export const Navbar = styled.div`
display: flex;
width: 100%;
height: fit-content;
align-items: center;
padding:  40px  5% 40px 5%;
justify-content: space-between;

`


export const SearchStyle = styled.div`
overflow: hidden;
width: 50%;
background: #F5F7FB;
/* box-shadow: 0px 0px 0px 4px rgba(3, 132, 198, 0.12); */
border-radius: 5px;
&> form{
    width: 100%;
    height: auto;
}
`
SearchStyle.Button = styled.button`
width: ${({w})=> w ? w : "fit-content"};
height: auto;
display: flex;
justify-content: center;
align-items: center;
border: none;
background-color: transparent;
outline: none;
position: relative;
padding:  0 15px;

svg{
    path{
        fill: #979DBB;
    }
}
`

SearchStyle.Input = styled.input`
flex: 1;
background-color: transparent;
outline: none;
padding: 12px 16px;
 border: none;
 &::placeholder{
    font-family: var(--familyR);
    font-style: normal;
    font-weight: 400;
    font-size: var(--size15);
    line-height: 140%;
    color: var(--shade-6);
    
 }
`
