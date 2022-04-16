import React from "react"
import { Buttons, Div, P } from "../../GlobalStyle";
import { MissionStyle } from "./styled";


const Mission = ()=>{
    return(
        <MissionStyle>
            <P size = "--size28" >
            Mission 40K: Tree plantation
            </P>
            <P mr = "16px 0 0 0" bold = "400"className="titleoposite" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </P>

            <Buttons mr = "64px 0 0 0" cl = "--shade-9" bg = "--shade-1" variant="contained" size = "--size16">
               See more
            </Buttons>

        </MissionStyle>
    )
}
export default Mission;