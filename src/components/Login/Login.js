import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    if(user){
        console.log("hell")
        navigate('/shop')
    }
    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
        console.log("ddo")
    }
    return (
        <div className='form-container'>
           <div>
           <h1 className='form-title'>Login</h1>
            <form onSubmit={handleUserSignIn}>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                </div>
                <p style={{color:'red'}}>{error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
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