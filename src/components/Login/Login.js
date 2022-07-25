import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
           <div>
           <h1 className='form-title'>Login</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-John?<Link className='form-link' to='/signUp'>Create New Account</Link></p>
            <div className='line'>
                <div></div>
                <p>or</p>
                <div></div>
           </div>
           <button className='google-btn'>
            <div>

            <img width={30} src="google.jpg" alt="" />
            </div>
            <p>

            Continue with Google
            </p>
            </button>
           </div>
          
        </div>
    );
};

export default Login;