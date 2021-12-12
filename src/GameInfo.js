import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function GameInfo({startNewGame, winner, turn}) {
  
  return (
    <Box sx={{ width: '100%', margin:'25px auto'}}>
        <Button variant="outlined" onClick={startNewGame} style={{float:"left", marginLeft:"15px"}}>New Game</Button>

        <Card style={{float:"right", width:"32%"}} variant="outlined">
            <Typography align='center' variant='h4'  >Winner</Typography>
            <Typography align='center' variant='body2' >{winner != null ? `${winner} won the game` : 'no winner yet'}</Typography>
        </Card>
        <Card style={{float:"right", width:"31%", marginRight:"20px"}} variant="outlined">
          <Typography align='center' variant='h4'  >Game turn</Typography>
          {winner === null && <Typography align='center' variant='body2'  >It's {turn===1 ? 'X' : 'O'} turn</Typography>}
        </Card>
    </Box>
 
  );
}
  
export default GameInfo;
  