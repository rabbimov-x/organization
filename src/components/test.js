
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyled = makeStyles({
    container: {
        left: "50%",
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: "center"
    },
    btn: {
        border : none,
        margin: 20,
        width:250,
        height: 65,
        borderRadius: 4,
        textTransform: 'uppercase',
        boxShadow: '0 30px 5px 2px rgba(255, 105, 135, .3)',
        cursor: 'pointer',
        color: 'fff',
        backgroundSize: '200%',
        transition: '0.4s',
        '&:hover' : {
          backgroundPosition: 'right',
        }
    }
})


export default function BasicButtons() {
  
  const classes = makeStyles();
  return (
    <Stack spacing={3} direction="row">
      <Button variant="contained" bx = {{color: "red"}}>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}