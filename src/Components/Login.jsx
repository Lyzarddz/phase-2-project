import React, { useState , useEffect } from 'react'
import { GiCarnivorousPlant} from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Login = ({ loginUser }) => {

  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  function handleChange(e){
    setUsername(e.target.value);
  }

  function handleSubmit(e){
   e.preventDefault();
   console.log("clicked login")
   
   const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
   if(user) {
     loginUser(user);
     navigate("/");
   }

  }

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])


  return (
    <div>
    <h1> <GiCarnivorousPlant/> Login <GiCarnivorousPlant/> </h1>   
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" onChange={handleChange} value={username}></input>
      </div>
      <br></br>
      <input type="submit" value="Login"/>
    </form>
    </div>
    
  )
}

export default Login


