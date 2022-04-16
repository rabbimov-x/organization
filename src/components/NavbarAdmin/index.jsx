import Raect, { useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Div , Buttons } from "../../GlobalStyle";
import { Navbar, SearchStyle } from "./styled";


const NavAdmin = ()=>{
    const [value , setValue] = useState("sac")
    console.log(value);
    
    return(

        <Navbar>
        
        <SearchStyle>
            <form>
                <Div w = "100%" h = "100%" display = "flex">
                    <SearchStyle.Input value = {value} onChange = {(e)=>setValue(e.target.value)}  placeholder = "Search...">
                             {/* <Icon.Search cl = "--shade-6" mr =' 0 16px 0 0' /> */}
                    </SearchStyle.Input>
                    <SearchStyle.Button type = "button">
                        <SearchIcon />           
                    </SearchStyle.Button>
                    
                </Div>
            </form>
        </SearchStyle>

        <Div w= "fit-content" display  = "flex" align = "center">
            <Buttons.Wish>
                <img src="./assets/images/png/logo.jpg" alt="error" />
            </Buttons.Wish>
            <Buttons bg = "--tr" pd = "10px">
              <MoreVertIcon sx={{ color: "var(--shade-9)" }}/>
            </Buttons>
        </Div>
        </Navbar>
    )
}
export default NavAdmin;