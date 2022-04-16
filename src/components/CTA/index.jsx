import React from "react"
import { Buttons, Div, P } from "../../GlobalStyle";
import { CtaStyled } from "./styled";


const Cta = ()=>{
    return(
        <CtaStyled>
            <CtaStyled.Div>
                
            </CtaStyled.Div>
            <CtaStyled.Content>
            <Div  className="content" textC= "center" display = "flex" flex="column" justify = "space-between" align = "center" >
                    <P size = "--size48" cl = "--shade-1" bold = "700" mr = " 0 0 42px 0">
                       You can contribute to make the environment greener!
                    </P>
                    <Div w= "100%" display = "flex" justify = "space-between" pd = "0 50px">
                        <Buttons.D variant="contained" bgimg ="success" size = "--size16" mr = "15px">
                           Join as a volunteer
                        </Buttons.D>
                        <Buttons variant="contained" size = "--size16" cl = "--shade-9" bg = "--shade-1" mr = "15px">
                        ,slw.md dew,.,

                        </Buttons>
                    </Div>

                </Div>
            </CtaStyled.Content>
        </CtaStyled>
    )
}
export default Cta;