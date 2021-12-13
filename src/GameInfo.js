import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
  cardInfo:{
   width:"32%",
   float:"right"
  }
})

function GameInfo({startNewGame, winner, turn}) {
  const classes = useStyles();

  return (
    <Box sx={{ width: '100%', margin:'25px auto'}}>
        <Button variant="outlined" onClick={startNewGame} style={{float:"left", marginLeft:"15px"}}>New Game</Button>

        <Card sx={{ bgcolor: 'primary.main' }}  className={classes.cardInfo} variant="outlined">
            <Typography align='center' variant='h4'  >Winner</Typography>
            <Typography align='center' variant='body2' >{winner != null ? `${winner} won the game` : 'no winner yet'}</Typography>
        </Card>
        <Card sx={{ bgcolor: 'primary.main' }}  className={classes.cardInfo}  style={{ marginRight:"15px"}} variant="outlined">
          <Typography align='center' variant='h4'  >Game turn</Typography>
          {winner === null && <Typography align='center' variant='body2'  >It's {turn===1 ? 'X' : 'O'} turn</Typography>}
        </Card>
    </Box>
 
  );
}
  
export default GameInfo;
  