import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles=makeStyles({
  board:{
    height: 850,
    margin: '200px auto',
    borderRadius: 5,
    background: '#272626',
  },
  item:{
    height:180,
    paddingTop: 50,
    borderRadius: 5,
  }

})
function Board() {
  const classes = useStyles();
  const [boardValues, setBoard] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  const [turn, setTurn] = useState(1);

  const setValue = (index, turn) =>{
    if(boardValues[index] === ' ' && turn === 1){
      boardValues[index]='X';
      setTurn(0);
    }else if(boardValues[index] === ' ' && turn === 0){
      boardValues[index]='O';
      setTurn(1);
    }
  }
    return (
      <Container className={classes.board}>
        <Grid container spacing={2}>
          {boardValues.map((value, index)=>(
              <Grid item  key={index} xs={4} onClick={()=> setValue(index, turn)}>
                <Typography  sx={{ bgcolor: 'primary.main' }} variant='h1' className={classes.item} noWrap>{value}</Typography>
              </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default Board;
  