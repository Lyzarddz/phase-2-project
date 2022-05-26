
// import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
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

  const[currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn]  = useState(false);

function loginUser (user) {
  setCurrentUser(user);
  setLoggedIn(true);
  localStorage.setItem('user_id', user.id);
}

function logoutUser () {
  setCurrentUser({});
  setLoggedIn(false);
  localStorage.removeItem('user_id');
}

useEffect(() => {
  const userId = localStorage.getItem('user_id')
  if (userId && !loggedIn) {
    fetch('http://localhost:3001/users/' + userId )
    .then(resp => resp.json())
    .then(data => loginUser(data))

  }

}, [])

  return (
    <Router>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser}/>
      <Routes>
      <Route path="/" element= {<HomePage />} />
      <Route path="/create" element= {<CreatePlant />} />
      <Route path="/login" element= {<Login />} />
      <Route path="/signup"  element= {<Signup loginUser={loginUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
  