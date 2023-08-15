import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Card from './components/Cards';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'
function App() {
  const [username, setUsername] = useState(sessionStorage.getItem("username")?sessionStorage.getItem("username"):'');
  const [email, setemail] = useState(sessionStorage.getItem("email")?sessionStorage.getItem("email"):'');
  const [enrnum, setenrnum] = useState("")
  const [clicked, setclicked] = useState(false)
  const [password, setPassword] = useState(sessionStorage.getItem("password")?sessionStorage.getItem("password"):"");
  const [Loggedin, setLoggedin]= useState(sessionStorage.getItem("Loggedin")?sessionStorage.getItem("Loggedin"):false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // You can implement your login logic here
  };

  return (<>
    {!Loggedin && <><Login username={username} setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    Loggedin={Loggedin}
    setLoggedin={setLoggedin}
    email={email}
    setemail={setemail} /></>}
    {Loggedin && <>
      <Navbar Loggedin={Loggedin} setLoggedin={setLoggedin}  username={username}     email={email}
 />
      {!clicked &&<><Card 
        enrnum={enrnum}
        setenrnum={setenrnum}
       clicked={clicked} 
       setclicked={setclicked}  
       email={email}        
           /></>
           
           }
       {clicked &&<>
       <Dashboard
       setclicked={setclicked}
       en={enrnum}
       />
       </>
           
           }
    </>}
</>
  );
}

export default App;

