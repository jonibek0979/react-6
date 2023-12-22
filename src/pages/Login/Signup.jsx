import React from 'react'
import { useNavigate } from 'react-router-dom';


let userUp = {
    name: '321',
    email: '321',
    password: '321'
  }


function Signup({mode}) {
    const nawigate = useNavigate()
    function fnUp(e) {
      e.preventDefault()
      let n = e.target.name.value;
      let f = e.target.email.value;
      let a = e.target.password.value;
      if (userUp.name == n && userUp.email == f && userUp.password == a) {
        nawigate('/')
        window.sessionStorage.setItem('tokin', 'dyhbghthtda')
      }
      else {
        nawigate('/login')
      }
    }
    return (
        <div className='SIngup'>
            <div className="singup__inner">
                <h2>Get Started Now</h2>
                <form onSubmit={fnUp} action="#" className='sing__form'>
                    <div className='div__form'>
                        <label htmlFor="name">name</label>
                        <input id='name' type="text" name='name' placeholder='Enter your name' />
                    </div>


                    <div className='div__form'>
                        <label htmlFor="email">Email address</label>
                        <input id='email' type="text" name='email' placeholder='Enter your email' />
                    </div>

                    <div className='div__form'>
                        <label htmlFor="password">Password</label>
                        <input id='password' type="text" name='password' placeholder='Enter your Password' />
                    </div>

                  <div className='div__label'>
                  <input className='inpp' id='agree' type="checkbox" />
                    <label className='labell' htmlFor="agree">I agree to the terms & policy</label>
                  </div>

                    <button type='submit'>Signup</button>

                </form>

                <div className='sing__line'>
                    <hr /> Or <hr />
                </div>
                <div className='sing__app'>
                    <a href="#"><i className="bi bi-google">Sign in with Google</i></a>
                    <a href="#"><i className="bi bi-apple">Sign in with Apple</i></a>
                </div>
                <div className='sing__mode'>
                Have an account? <button onClick={()=> mode(false)}>Sign In</button>
                </div>

            </div>
        </div>
    )
}

export default Signup