import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { GiCarnivorousPlant} from "react-icons/gi";


 const Signup = ({loginUser, clearErrors, addErrors }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    if(username.length >= 5) {
    fetch('http://localhost:3000/users', {
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
  }else {
    addErrors(["Username must have more than 5 characters"])
  }
}

useEffect(() => {
  return () => {
    clearErrors();
  }
}, [])
 
  return ( 
    <div className='primary'>
    <h1><GiCarnivorousPlant/> Create Account <GiCarnivorousPlant/></h1> 
    <form onSubmit={ handleSubmit}>
      <div>
        <label htmlFor="username ">Username: </label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>   
        <br></br>
        <input type="submit" value="Create Account"/>
    </form>
   
    </div>
    
  
  )
} 

export default Signup

