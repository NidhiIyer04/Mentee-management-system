import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';
import EditPassword from './EditPassword';

function ProfileDropdown(props) {

  let {username, setLoggedin} =props

  return (
    <DropdownButton id="profile_dropdown" title={username}>
      <Dropdown.Item ><EditPassword/></Dropdown.Item>
      <Dropdown.Item onClick={()=>
      {setLoggedin(false)
      sessionStorage.clear()}}><a >Logout</a></Dropdown.Item>
    </DropdownButton>
  )
}

export default ProfileDropdown;
