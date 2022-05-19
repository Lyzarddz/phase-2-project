
// import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import CreatePlant from './Components/CreatePlant';
import Signup from './Components/Signup';

// const useStyles = makeStyles({
//   buttonColor:{
//     backgroundColor: 'red'
//   }
// })
 
function App() {
  // const classes = useStyles();

  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element= {<HomePage />} />
      <Route path="/create" element= {<CreatePlant />} />
      <Route path="/login" element= {<Login />} />
      <Route path="/signup" element= {<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
  