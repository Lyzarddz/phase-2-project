import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


 const Signup = ({loginUser}) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username})
    }) 
    .then(resp => resp.json())
    .then(data => {
      loginUser(data);
      navigate('/'); 
    })
  }
 
  return ( 
    <div>
    <h1>Create Account</h1> 
    <form onSubmit={ handleSubmit}>
      <div>
        <label htmlFor="username ">Username: </label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>   
        <br></br>
        <input type="submit" value="Create Account" />
    </form>
   
    </div>
    
  
  )
} 

export default Signup

