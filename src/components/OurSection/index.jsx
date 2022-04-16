import React from "react";
import { OurStyle } from "./styled";
import { Div, Img, P } from "../../GlobalStyle";

const OurSeaction = ()=>{
    return (
        <OurStyle>
            <Div className="left" display = "flex" flex= "column" justify = 'center' aligin = "center">
                <P bold = "700" className = "letter">
                OUR JOURNEY
                </P>
                <P line = "120%" bold = "700" size= "--size48" mr = "16px  0 0 0">
                 How we raised 34M
                </P>
                <P line = "160%" mr = "16px  0 0 0" className="titleoposite" bold = "400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
                </P>
                <Div display = "flex" align="center" mr = "22px  0 0 0">
                    <Div w = "fit-content">
                        <P size = "--size24" line = "160%">
                            34M+
                        </P>
                        <P className="titleoposite" bold = "400" mr = "10px  0 0 0">
                        Donation Received
                        </P>
                    </Div>
                    <Div mr = " 0 0 0 32px" w = "fit-content">
                        <P size = "--size24" line = "160%">
                            400+
                        </P>
                        <P className="titleoposite" bold = "400" mr = "10px  0 0 0">
                        Volunters
                        </P>
                    </Div>
                    <Div mr = " 0 0 0 32px" w = "fit-content">
                        <P size = "--size24" line = "160%">
                            40M+
                        </P>
                        <P className="titleoposite" bold = "400" mr = "10px  0 0 0">
                        Trees planted
                        </P>
                    </Div>
                </Div>
            </Div>
            <Div  className="right" display = "flex"  justify= "right" align = "center" >
                    
                        <Img w="85%" mr = "0 -5px 0 0" >
                            <img src = "./assets/images/png/section.png" alt="error" />
                        </Img>
                                         
            </Div>
        </OurStyle>
    )
} 
export default OurSeaction;