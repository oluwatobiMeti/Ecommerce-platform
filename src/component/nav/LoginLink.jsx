import React from 'react'
import { CiUser } from "react-icons/ci";
import "./loginlink.css"
function LoginLink() {
  return (
    <div className='login-link'>
      <CiUser/>
      <p>Login/Register</p>
    </div>
  )
}

export default LoginLink
