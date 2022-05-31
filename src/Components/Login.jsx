import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GiCarnivorousPlant} from "react-icons/gi";

const Login = ({ loginUser, addErrors, clearErrors }) => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate(0);

  const handleChange = e => {
    setUsername(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if(user) {
      loginUser(user);
      navigate("/")
    } else {
      addErrors(["Username did not match anything in the database"])
    }
  }

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))

    return () => {
      clearErrors();
    }
  }, [])

  return (
    <div>
    <h1><GiCarnivorousPlant/> Log In <GiCarnivorousPlant/></h1> 
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" onChange={ handleChange } value={ username } />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login