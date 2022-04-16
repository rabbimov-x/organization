import { updateState } from "../types/types";


const   initiallState = {
    checkfc: false,
    sen: "",
    message: "Search ...",
    loader: false,
    modal: false,
    colorbg: "--cl-home-d1",
    buttonClick: false,
} 

export const updateReduser =( state = initiallState , action )=>{
   if( action.type === updateState){       
    return {...state,...action.data};
   }
   return state; 
}