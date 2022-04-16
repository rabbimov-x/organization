import React from "react";
import {Buttons, Div, Img, P} from "../../GlobalStyle"
import { CardStyle } from "./styled";


export const CardPaper =()=>{

    return(
        <CardStyle>
            <CardStyle.Img>
                <Img h = "100%">
                <img src="./assets/images/png/project.png" alt="error" />
                </Img>
            </CardStyle.Img>
            <Div pd = "5px 0 10px 5px" display = "flex" align = "center"> 
                
                <Div  textC= "Center" h="fit-content">
                    <P size = "--size20" cl = "--shade-9" mr= "16px 0 0 0">
                    Francis Weber
                    </P>
                </Div>
            </Div>
            <Div textC= "Center" w = "95%" pd = " 0 5px 0 5px">
                <P bold= "400"  cl = "--shade-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    </P>
                </Div>
                <Div  h="fit-content" w="fit-content" display = "flex" justify = "center" >
                    {/* <Icon/>
                    <Icon/>
                    <Icon/> */}
                </Div>
            </CardStyle>
    )
}
export default CardPaper;