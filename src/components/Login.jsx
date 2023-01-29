import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result); // return UserCredentialImpl data
        localStorage.setItem('blog_firebase_auth', true);
        setIsAuth(true);
        // auth finish, then go to home
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
