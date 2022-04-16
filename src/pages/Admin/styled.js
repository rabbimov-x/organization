import styled from "styled-components";



export const AdminStyle = styled.div`
width: 100%;
height: auto;
display: flex;
background-color: var(--shade-1);
`
AdminStyle.Left = styled.div`
width: 235px;
height: 100vh;
background-color: var(--primary);
border-bottom-right-radius: 40px;
border-top-right-radius: 40px;
padding: 30px 20px 0 15px;
overflow-y: visible;
overflow-x: hidden;
`
export const Ul = styled.ul`
    width: 100%;
    display:  flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0;

    /* @media (max-width: 768px) {
        display: ${({display})=> display?  display :"flex"};
        width: 100vw;
        height: 60vw;
        background-color: var(--cl-dark);
        flex-direction: column;
        
        
    } */
`
Ul.Li = styled.li`
    width: 100%;
    height: fit-content;
    color: var(--shade-1);
    background-color: transparent;
    >a{
        width: 100%;
        padding: 17px 12px;
        border-radius: 12px;
        text-decoration: none;
        font-family: var(--font-family);
        font-size: var(--size18);
        -webkit-transition: 0.2s color;
        transition: 0.2s color;
        display: flex;
        align-items: center;
        position: relative;
        
    }
    >.navlink{
        color: var(--shade-1);
        svg {
            
            &>path{
                fill: var(--shade-1);
            }
        }
    }
    >.activeNav{
        color: #000;
        background-color: var(--shade-2);
        position: relative;
        svg {
            
            &>path{
                fill: var(--primary);
            }
        }
        &::before{
            content: "";
            position: absolute;
            top: 0;
            right: -25px;
            height: 100%;
            width: 10px;
            background: #DFEBF9;
            border-radius: 12px;
            
        }
    }

    
  
`
AdminStyle.Right = styled.div`
overflow-y: scroll;
overflow-x: hidden;
flex: 1;
height: 100vh;
`
