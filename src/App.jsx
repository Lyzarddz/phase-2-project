
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import CreatePlant from './Components/CreatePlant';
import Signup from './Components/Signup';
import Errors from './Components/Errors';
import Stylesheet from './Components/Stylesheet';



 
function App() {

  const[currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn]  = useState(false);
  const [errors, setErrors] = useState([]);

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

function addErrors (errors) {
   setErrors(errors);
}

const clearErrors = () => {
  setErrors([]);
}


useEffect(() => {
  const userId = localStorage.getItem('user_id')
  if (userId && !loggedIn) {
    fetch('http://localhost:3001/users/' + userId )
    .then(resp => resp.json())
    .then(data => loginUser(data))

  }

}, [loggedIn])



  return (
    <Router>
      
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser}/>
      <Errors errors= {errors} />
      <Routes>
      <Route path="/" element= {<HomePage />} />
      <Route path="/create" element= {<CreatePlant />} />
      <Route path="/login" element= {<Login clearErrors={ clearErrors } loginUser={loginUser} addErrors= {addErrors}/>} />
      <Route path="/signup"  element= {<Signup clearErrors={ clearErrors } loginUser={loginUser} addErrors= {addErrors} />} />
      </Routes>
    </Router>
    
  );
}

export default App;
  