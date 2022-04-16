import React from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { useSelector , useDispatch} from "react-redux";
import { onSubmit, updateState } from "./redux/types/types";
import BasicButtons from './components/test';
import { Buttons } from './GlobalStyle';
import SendIcon from '@mui/icons-material/Send';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <Router class = "app">
      <Routes>
        <Route  path = "/"  element = { <Admin/>  } /> 
      </Routes>  
    </Router>
  );
}

export default App;
