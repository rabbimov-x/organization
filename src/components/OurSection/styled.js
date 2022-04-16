import styled from "styled-components"



export const OurStyle = styled.div`
width: 100%;
overflow: hidden;
background-color: var(--shade-9);
border-radius: 12px;
padding: 57px  0 71px 5%;
display: flex;

.left, .right{
    width: 50%;  
}
@media (max-width: 992px) {
    flex-wrap: nowrap;
    padding: 30px 15px;
    justify-content: center;
    .left{
        width: 80%;
        text-align: center;
        &> div{
            justify-content: center;
        }
    }
      .right{
          display: none;
      }
}
@media (max-width: 576px) {
    padding: 30px 15px;
    .left{
        width: 100%;
    }
}
    
`