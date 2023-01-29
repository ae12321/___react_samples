import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
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
