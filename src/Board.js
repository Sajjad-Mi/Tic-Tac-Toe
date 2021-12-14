import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GameInfo from './GameInfo'


const useStyles=makeStyles({
  board:{
    height: 620,
    margin: '200px auto',
    borderRadius: 5
  },
  item:{
    height:120,
    paddingTop: 20,
    borderRadius: 5
  }

})
function Board() {
  const classes = useStyles();
  const [boardValues, setBoard] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);

  //update the boardvalue array if the user selection is valid and change the turn
  const setValue = (index, turn) =>{
      if(boardValues[index] === ' ' && turn === 1){
        boardValues[index]='X';
        setTurn(0);
        checkWinner();
      }else if(boardValues[index] === ' ' && turn === 0){
        boardValues[index]='O';
        setTurn(1);
        checkWinner();
      }
  }
  const checkWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];   
        if ((boardValues[a]==='X' || boardValues[a]==='O') && boardValues[a] === boardValues[b] && boardValues[a] === boardValues[c]) {
          setWinner(boardValues[a]);
          setTurn(null)
        }
      }
  }
  
  const startNewGame = ()=>{
    setBoard([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    setWinner(null);
    setTurn(1);
  }
  return (
    <Container maxWidth={'sm'} sx={{ bgcolor: 'secondary.main' }}  className={classes.board}>
      <Grid container  spacing={2}>
          {boardValues.map((value, index)=>(
            <Grid item  key={index} xs={4} onClick={()=> setValue(index, turn)}>
              <Typography  sx={{ bgcolor: 'primary.main' }} variant='h1' className={classes.item} noWrap>{value}</Typography>
            </Grid>
          ))}
          <GameInfo startNewGame={startNewGame} winner={winner} turn={turn} />
      </Grid>

    </Container>
  );
}
  
export default Board;
  