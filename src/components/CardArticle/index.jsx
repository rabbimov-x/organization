import React from "react";
import { ArticliStyle } from "./styled";
import { Buttons, Div, P } from "../../GlobalStyle";
const Article  = (props)=>{
    return (    
        <ArticliStyle display = { props?.small ? "flex" : "block"}>
            <ArticliStyle.Img w = { props?.small ? "192px" : "100%"} h = { props?.small ? "auto" : "180px"}>
                <img src="./assets/images/png/project.png" alt="error" />
            </ArticliStyle.Img>
            <Div pd = "10px 5px 0 5px"  w = { props?.small ? "71%" : "100%"} display = {props?.small ? "flex" : "block"}>
                <Div >
                <Div pd = "5px 0 10px 5px" display = "flex" align = "center"> 
                
                <Div w="fit-content" h="fit-content">
                    <P size = "--size20" cl = "--shade-9" mr= "">
                     Don’t destroy greenery and don’t spoil scenery
                    </P>
                </Div>
             </Div>
              
           
                    
                </Div>
                <Div  display = "flex" justify  = "space-between" align = "center">
                    
                    <Div w= "fit-content" mr = { props?.small ? "auto 0 0 auto" : ""}  >
                    <P bold= "400"  cl = "--shade-7" mr = " 0 0 0 5px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    </P>
                    </Div>
                </Div>
            </Div>
        </ArticliStyle>
    )}
export default Article;