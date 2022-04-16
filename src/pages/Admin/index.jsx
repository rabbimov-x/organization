import React from "react";
import { Img, P } from "../../GlobalStyle";
import {NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

import { AdminStyle, Ul } from "./styled";
import NavAdmin from "../../components/NavbarAdmin";
import Tables from "../../components/Table";

const Admin = ()=>{
    return(
        <AdminStyle>
            <AdminStyle.Left>
                <Img w= "70px" h= "70px" mr = "0 auto" br = "50%" >
                    <img src="./assets/images/png/logo.jpg" alt="error" />
                </Img>
                
                <Ul >
                                <Ul.Li >
                                    <NavLink  to = "/"  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                      <HomeIcon sx = {{margin:  " 0 5px 0 0" }}  />   home
                                    </NavLink>
                                </Ul.Li>
                                    
                    </Ul>
            </AdminStyle.Left>
            <AdminStyle.Right >
               <NavAdmin/>
               <Tables>

               </Tables>
            </AdminStyle.Right>
        </AdminStyle>
    )
}
export default Admin;