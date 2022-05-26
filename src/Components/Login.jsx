import React from 'react'
import { GiCarnivorousPlant} from "react-icons/gi";

const Login = () => {
  return (
    <div>
    <h1> <GiCarnivorousPlant/> Login <GiCarnivorousPlant/> </h1>
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username"></input>
      </div>
    </form>
    </div>
    
  )
}

export default Login


