
import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import { makeStyles } from '@mui/material/core/styles';
// import Button from '@mui/material/Button';
// import { ButtonS } from './styledtest';
// import Cta from './CTA';
// import OurSeaction from './OurSection';
// import Mission from './Mission';
import { Container, Col6, Col4 } from '../GlobalStyle';
// import Article from './CardArticle';
// import CardPaper from './CardPaper';
// import Person from './Person';
import Award from './Award';

// const useStyled = makeStyles({
//     container: {
//         left: "50%",
//         top: '50%',
//         transform: 'translate(-50%, -50%)',
//         textAlign: "center"
//     },
//     btn: {
//         border:  'none',
//         margin: 20,
//         width:250,
//         height: 65,
//         borderRadius: 4,
//         textTransform: 'uppercase',
//         boxShadow: '0 30px 5px 2px rgba(255, 105, 135, .3)',
//         cursor: 'pointer',
//         color: 'fff',
//         backgroundSize: '200%',
//         transition: '0.4s',
//         '&:hover' : {
//           backgroundPosition: 'right',
//         }
//     }
// })


export default function BasicButtons() {
  
  // const classes = makeStyles();
  return (
    <Container>
      {/* <ButtonS variant="contained" w = "auto"  bx = {{color: "red"}}>Text</ButtonS>
      <ButtonS variant="contained" >Contained</ButtonS>
      <ButtonS variant="outlined" >Outlined</ButtonS> */}
      <Col4>
        <Award/>
      </Col4>
    </Container>
  );
}