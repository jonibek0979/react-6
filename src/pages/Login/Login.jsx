import React, { useState } from 'react'
import  './Login.scss'
import Signup from './Signup'
import img__bg from '../../assets/bg/chris-lee-70l1tDAI6rM-unsplash 1.png'
import Signin from './Signin'

function Login() {
  const [mode , setMode] = useState(false)
  return (
    <div className='Login'>
      {
        mode ?  <Signup mode={setMode}/>:  <Signin mode={setMode}/>
      }
      
        <img src={img__bg} alt="" />
    </div>
  )
}

export default Login