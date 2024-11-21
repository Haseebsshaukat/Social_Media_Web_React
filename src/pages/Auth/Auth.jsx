import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore The Ideas Throughout The World</h6>
            </div>
        </div>
        <LogIn/>
    </div>
  )
}
function LogIn(){
    return(
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Log In</h3>

                <div>
                    <input type="text"
                        className="infoInput"
                        name='username'
                        placeholder='Username'
                    />
                </div>
                <div>
                    <input type="password"
                        className="infoInput"
                        name='password'
                        placeholder='password'
                    />
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Don't have an account Sign up</span>
                
                <button className="button infoButton" type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}
function SignUp(){
    return(
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type="text"
                        placeholder='First Name'
                        className='infoInput'
                        name='firstname'
                        />
                    <input type="text"
                        placeholder='Last Name'
                        className='infoInput'
                        name='lastname'
                        />
                </div>
                <div>
                    <input type="text"
                        className="infoInput"
                        name='username'
                        placeholder='Usernames'
                    />
                </div>
                <div>
                    <input type="text"
                        className="infoInput"
                        name='password'
                        placeholder='password'
                    />
                    <input type="text"
                        className="infoInput"
                        name='confirmpassword'
                        placeholder='Confirm Password'
                    />
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Already have an account. Login!</span>
               
                <button className="button infoButton" type='submit'>Signup</button>
                </div>
            </form>
        </div>
    )
}
export default Auth