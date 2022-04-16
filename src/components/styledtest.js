import Button from '@mui/material/Button';
import {styled as sty} from '@mui/material/styles';

export const ButtonS  = sty(Button)`
         border:  'none';
         margin: 20px !important;
         width:fit-content;
         padding: 13px 28px;
         border-radius: 4px;
         text-transform: uppercase;
         box-shadow: 0 5px 5px 2px rgba(255, 105, 135, .3);
         cursor: pointer;
         color: #fff;
         background-size: 200%;
         transition: 0.4s;
         &:hover{
             background-position: right;
         }
         background-image: linear-gradient(135deg, #2980b9, #3498db, #8e44ad );
     `
