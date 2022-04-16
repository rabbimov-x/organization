import styled  from "styled-components";





export const Nav = styled.div`
    width:100%;
    height: auto;
    padding: 0 ;
    background: transparent;
    
    a{
        color: var(--shade-9) !important;
    }
    .login1{
        display: none;
    }
    @media (max-width: 768px){
        background-color: var(--cl-dark);
        .login1{
            display: block;
        }
        .login2{
            display: none;
        }
    }
    

`

export const Ul = styled.ul`
    width: fit-content;
    display:  flex;
    align-items: center;
    list-style: none;
    margin: 0 30px 0 auto;
    padding: 0;

    @media (max-width: 768px) {
        display: ${({display})=> display?  display :"flex"};
        width: 100vw;
        height: 60vw;
        background-color: var(--cl-dark);
        flex-direction: column;
        
        
    }
`
Ul.Li = styled.li`
    width: auto;
    padding: 20px 10px;
    margin-left: ${({mr})=>mr? mr : "30px"};
    color: #2B2D42;
    background-color: transparent;

    >a{
        text-decoration: none;
        font-family: var(--font-family);
        font-size: var(--size18);
        -webkit-transition: 0.2s color;
        transition: 0.2s color;
        display: flex;
        position: relative;
        color: #000;

        &::before{
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            left: 0.1px;
            bottom: -4px;
            background-color: var(--primary);
            transition: all 0.2s linear;
            
        }
        &:hover{
            color: var(--cl-red);
            &::before{
            width: 99%;
            }
        }
    }
    >.navlink{
        color: #2B2D42;
        
    }
    >.activeNav{
        color: var(--cl-red);
        display: flex;
        transition: all 0.2s linear;
        &::before{
            width: 99%;
        }
    }

    @media (max-width: 768px){
        >.navlink{
        color: var(--cl-white);
        z-index: 10px;
    }   
    }

  
`
// export const BuuttonUl = styled.button`
// display: ${({display})=> display? display: "block"};
// border:2px solid var(--cl-button);
// outline: none;
// cursor: pointer;
// padding: 6px 14px;
// border-radius: 4px;
// background-color: var(--shade-3);
// margin: 15px 0 15px auto;



// &:active{
//     transform: scale(0.95);
//     background-color: var(--shade-1);
//     &> div> svg{
//     path{
//         fill: var(--shade-9);
//     }
    
// }
// }

// @media (min-width: 768px) {
//     display: none;
// }
// `

export const Logo = styled.div`
overflow: hidden;
width: 10%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;

&> img{
    min-width: 120%;
    max-width: 150%;
}
@media (max-width: 767px) {
    width: 15%;
    &> img{
    min-width: 130%;
    max-width: 150%;
}   
}
`