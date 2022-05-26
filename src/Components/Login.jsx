import React, { useState , useEffect } from 'react'
import { GiCarnivorousPlant} from "react-icons/gi";

const Login = () => {

  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([])

  function handleChange(e){
    setUsername(e.target.value);
  }

  function handleSubmit(e){
   e.preventDefault();
  }

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(data => setUsers(data))


  }, [])


  return (
    <div>
    <h1> <GiCarnivorousPlant/> Login <GiCarnivorousPlant/> </h1>   
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" onChange={handleChange} value={username}></input>
      </div>
      <br></br>
      <input type="submit" value="Login" onClick={handleSubmit}/>
    </form>
    </div>
    
  )
}

export default Login


