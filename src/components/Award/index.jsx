import React from "react";
import { Author } from "./styled";
import { P, Div } from "../../GlobalStyle";

const Award = ()=>{
    return (
        <Author>
            <Author.Img>
            <img src="./assets/images/png/Award.png" alt="error" />
            </Author.Img>
            <Div textC = "center" pd = "10px  0 0 0">
                <P  size = "--size16" cl ="--shade-7" bold = "700">
                    2020
                </P>
                <P size = "--size15" cl ="--shade-7" >
                     Best NGO Award
                </P>
                <P size = "--size14" cl ="--shade-6" pd = "5px 0 0 0">
                     Berlin, Germany
                </P>
            </Div>
        </Author>
    )
}

export default Award