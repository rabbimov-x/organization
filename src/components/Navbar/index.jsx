import React   from "react";
import { navbar } from "../../utils/navbar";
import { BuuttonUl, Logo, Nav, Ul } from "./style";
import {NavLink} from 'react-router-dom'
import {Buttons, Container , Div} from "../../GlobalStyle";
import { useDispatch , useSelector } from "react-redux";
import { updateState } from "../../redux/types/types";
const  Navbar= ()=>{
const state = useSelector((state)=>state.update.buttonClick)
const dispatch = useDispatch()
    return(
        <Nav>
            
            <Container justify = "space-between" align = "center">
                    <Logo>
                                <img src="./assets/images/png/logo.jpg" alt="error" />
                    </Logo>
                   <Buttons className="login1" mr = "0 10px 0 auto" pd = "" variant="contained" size = "--size14" cl = "--shade-1" bg = "--primary" onClick={()=>dispatch({type: updateState, data: {buttonClick: !state}})}>
                    
                        <Div>
                        {
                        //    state ? <Icon.Nav  cl = "--shade-7" /> : <Icon.X  cl = "--shade-7" />
                        }
                        </Div>
                        a
                    
                    
                    
                    
                    
                    
                    
                    </Buttons>
                    <Buttons  className="login1" variant="contained" size = "--size14" cl = "--shade-1" bg = "--shade-9" >
                        Login
                    </Buttons>
                    <Ul  display = {state ?  "none" : "flex"} justify = "space-between" >
                    {
                        navbar.map(({id , path , title} , keys)=>{
                            return(
                                <Ul.Li  key = {id} mr = {keys === 0 ? "20px" : "30px"} >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = {path}  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                        {title}
                                        
                                    </NavLink>
                                </Ul.Li>
                            )
                        })
                    }
                                    
                    </Ul>
                    <Buttons className="login2" variant="contained" size = "--size14" cl = "--shade-1" bg = "--shade-9" >
                        Login
                    </Buttons>
            </Container>
        </Nav>
    )
}

export default Navbar;
