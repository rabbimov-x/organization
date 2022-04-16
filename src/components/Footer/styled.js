import styled from "styled-components"


export const FooterStyled = styled.div`
width: 100%;
height: auto;
background-color: var(--shade-9);
padding: 30px 0;
.footerLeft{
    width: 65%;
}
.footerRight{
    width: 35%;
}

@media (max-width: 1133px) {
.footerLeft{
    width: 85%;
    margin:  0 auto;
}
.footerRight{
    width: 45%;
    margin:  30px auto 0;
}       
}
@media (max-width: 790px) {
.footerLeft{
    width: 100%;
    margin:  0 auto;
}
.footerRight{
    width: 65%;
    margin:  30px auto 0;
}       
}

@media (max-width: 576px) {
.footerLeft{
    width: 80%;
    margin: 0 auto;
}
.footerRight{
    width: 90%;
    margin:  30px auto 0;
}       
}

`
export const Ul = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
`
Ul.Li = styled.li`
    width: auto;
    padding:   ${({pd})=>pd? pd : "5px 10px"} ;
    display: flex;
    justify-content: ${({justify})=>justify? justify : "left"};
    margin-left: ${({mr})=>mr? mr : "30px"};
    color: ${({cl})=>cl? `var(${cl})` : "var(--shade-4)"};
    background-color: transparent;
.nav{
        margin: 30px 0 10px 0;
        font-size: var(--size18);
        font-weight:600;
        color: ${({cl})=>cl? `var(${cl})` : "var(--shade-6)"};        
}
    >a{
        width: fit-content;
        text-decoration: none;
        font-family: var(--familyR);
        font-size: ${({size})=> size ? `var(${size})` : "var(--size15)"};
        font-weight: ${({bold})=> bold ? bold : "400"};
        color: ${({cl})=>cl? `var(${cl})` : "var(--shade-4)"};
        -webkit-transition: 0.2s color;
        transition: 0.2s color;
        display: flex;
        position: relative;

        /* &::before{
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            left: 0.1px;
            bottom: -4px;
            background-color: var(--primary);
            transition: all 0.2s linear;
        } */
        &:hover{
            color: var(--shade-1);
            /* &::before{
            width: 99%;
            } */
        }
    }
    >.navlink{
        color: var(--shade-1);
    }
    >.activeNav{
        color: var(--cl-red);
        display: flex;
        transition: all 0.2s linear;
        &::before{
            width: 99%;
        }
    }

    

  
`