import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';

function ProfileDropdown(props) {
  let {  username, Loggedin, setLoggedin} =props

  return (
    <DropdownButton id="profile_dropdown" title={username}>
      <Dropdown.Item href="#/action-1">Edit Password</Dropdown.Item>
      <Dropdown.Item onClick={()=>{setLoggedin(false)}}>Logout</Dropdown.Item>
    </DropdownButton>
  );
}

export default ProfileDropdown;
