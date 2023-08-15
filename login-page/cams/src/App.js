import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Card from './components/Cards';
import Navbar from './components/Navbar';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Loggedin, setLoggedin]= useState(false);

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
    setLoggedin={setLoggedin} /></>}
    {Loggedin && <>
      <Navbar Loggedin={Loggedin} setLoggedin={setLoggedin}  username={username} />
      <Card 
          
           />
    </>}
</>
  );
}

export default App;

