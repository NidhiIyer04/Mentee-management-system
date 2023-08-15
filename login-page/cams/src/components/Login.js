import React, { useState } from 'react';
import './App.css';
let users =[
    {username:"abc",
     password:"abc",
    email:"abc@abc"},
    {username:"Ajay",
    password:"1",
   email:"ajay@gmail.com"}

]
function Login(props) {
 
let {  username, setUsername,password, setPassword,Loggedin, setLoggedin,email, setemail} =props
const [error,Seterror]= useState(false)
  const handleUsernameChange = (event) => {
    setemail(event.target.value.toLowerCase());
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
    
    users.forEach((a,i)=>
    {
        console.log("i",i)
        if(a.email===email.toLowerCase() &&  a.password===password){
        setLoggedin(true)
        setUsername(a.username)
         }
       

})

if( !Loggedin){
    Seterror(true)
     }
    // You can implement your login logic here
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div>
            {error &&<> <h6 style={{color:"red"}}>Enter correct details</h6></>}
          <label>Username:</label>
          <input type="text" value={email} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

