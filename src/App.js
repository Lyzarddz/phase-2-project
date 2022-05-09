import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonColor:{
    backgroundColor: 'red'
  }
})

function App() {
  const classes = useStyles();

  return (
    <div >
      <h1>Hello World</h1>
      <Button variant="contained" color="primary" className= {classes.buttonColor}>Goodbye World</Button>
    </div> 
  );
}

export default App;
 