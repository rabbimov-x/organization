import React from "react";
import { Div, P,Col4, Container, Button, Social, Icon } from "../../GlobalStyle";
import SearchFooter from "../SearchFooter";
import {NavLink} from "react-router-dom" 
import { FooterStyled, Ul } from "./styled";


const Footer =()=>{
    return(
        <FooterStyled>
            <Container>
                <Div display = "flex" className = "footerLeft">
                    <Col4 pd = "30px 0">
                    <Ul>
                        <Ul.Li>
                            <P mr = " 0 0 10px 0" size = "--size18" cl = "--shade-6" bold = "600"  >
                               Каталог
                            </P>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                    </Ul>
                    </Col4>
                    <Col4 pd = "30px 0">
                    <Ul>
                        <Ul.Li>
                            <P mr = " 0 0 10px 0" size = "--size18" cl = "--shade-6" bold = "600"  >
                               Каталог
                            </P>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                    </Ul>
                    </Col4>
                    <Col4 pd = "30px 0">
                    <Ul>
                       
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li>
                            <NavLink className= "nav" mr = " 30px 0 10px 0" size = "--size18" cl = "--shade-6" bold = "600" to = "/home">
                               Каталог
                            </NavLink>
                        </Ul.Li>
                        <Ul.Li pd = " 0 25% 0 0" justify = "space-between" >
                            <Social>
                            <Icon.VKontakte/>
                            </Social>
                            <Social>
                            <Icon.Onoklassniki/>
                            </Social>
                            <Social>
                            <Icon.Facebook/>
                            </Social>
                            <Social>
                            <Icon.Instagram/>
                            </Social>
                        </Ul.Li>
                    </Ul>
                    </Col4>
                                 </Div>
                <Div display = "flex" justify = "left" className = "footerRight">
                    <P size = "--size18" cl = "--shade-6" mr = " 0 0 10px 0">
                    Подпишитесь на рассылку
                    </P>
                    <SearchFooter w = "100%" />
                    <P size = "--size18" cl = "--shade-6" mr = " 10px 0 0 0">
                    Согласие на обработку персональных данных
                    </P>
                </Div>
            </Container>
        </FooterStyled>
    )
}
export default Footer