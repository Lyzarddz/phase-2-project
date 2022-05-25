import React, {useState} from 'react'



 const Signup = () => {
  const [username, setUsername] = useState("");

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
    .then(data => console.log(data))
  }
 
  return ( 
    <div>
    <h1>Create Account</h1> 
    <form onSubmit={ handleSubmit}>
      <div>
        <label htmlFor="username ">Username:</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>   
        <input type="submit" value="Create Account" />
    </form>
   
    </div>
    
  
  )
} 

export default Signup

