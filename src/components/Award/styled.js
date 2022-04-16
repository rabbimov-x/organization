import styled from "styled-components"

export const Author = styled.div`
width: 100%;
height: fit-content;
padding:  0 20px;
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0;
&> div{
    text-align: center;
}
`
Author.Img = styled.div`
width: 100px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
&> img{
    width: 100%;
    height: auto;    
}

@media(max-width: 1200px ) {
    width: 90px;
    height: 90px;
}
@media(max-width: 992px ) {
    width: 80px;
    height: 80px;
}
@media(max-width: 757px ) {
    width: 60px;
    height: 60px;
}
@media(max-width: 576px ) {
    width: 50px;
    height: 50px;
}
`   