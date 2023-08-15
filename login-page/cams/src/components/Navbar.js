import React from 'react';
import './App.css';
import StudentDropdown from './StudentDropdown'; // Adjust the path as needed
import ProfileDropdown from './ProfileDropdown'; // Import the ProfileDropdown component

function Navbar(props) {
  let {  username, Loggedin, setLoggedin} =props
  const students = [
    'Ajay',
    'Vineet',
    'Sushant',
    'Tanishq',
    'Nidhi',
    'Yogesh',
    'Shreya',
  ];

  return (
    <section id="header">
      <div className="navbar-left">
        {/* <StudentDropdown students={students} /> */}
      </div>
      <div className="navbar-right">
        <h2 id="title" s>Mentee Management</h2>
        <ul id="navbar">
          <li><a style={{ visibility: "hidden"}}>knlnln'pjnpjDark/Light Mode</a></li>
          <li>
            <ProfileDropdown  
             Loggedin={Loggedin} setLoggedin={setLoggedin}  username={username}
            
            /> 
          </li>
          <li><a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
