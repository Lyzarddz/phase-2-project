
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Signup from './Components/Signup';
import Login from './Components/Login';

const useStyles = makeStyles({
  buttonColor:{
    backgroundColor: 'red'
  }
})
 
function App() {
  const classes = useStyles();

  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route to="/" element= {<HomePage />} />
      <Route to="/signup" element= {<Signup />} />
      <Route to="/login" element= {<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
  