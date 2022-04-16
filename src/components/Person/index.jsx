import React from "react"
import { A, Div, P, Icon } from "../../GlobalStyle";
import { PersonStyled } from "./styled";
const Person = () =>{
    return(
        <PersonStyled>
            <PersonStyled.Img>
                <img src="./assets/images/png/Cta.png" alt="error" />
            </PersonStyled.Img>
            <Div textC = "center"  >
                <P size = "--size20" cl = "--shade9" mr= "16px 0 0 0" bold = "500">
                    Francis Weber
                </P>
                <P size = "--size12" cl = "--shade6">
                    Vice Chairman
                </P>
                <Div display = "flex" justify = "center" align = "center"> 
                    <A href="https://www.facebook.com/xumoyun.rabbimov.9" target= "_blank" >
                        <Icon.Facebook w = "--icon-w22"/>
                    </A>
                    <A mr = "10px 20px" href="https://www.twitter.com" target= "_blank" >
                        <Icon.Twitter />
                    </A>
                    <A href="mailto:rabbimovxumoyun22@gmail.com" >
                        <Icon.Email/>
                    </A>
                    
                </Div>

            </Div>

        </PersonStyled>
    )

}

export default Person;
