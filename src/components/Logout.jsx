import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate('/login');
      })
      .catch((error) => {
        // An error happened.
      });
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // console.log(result); // return UserCredentialImpl data
    //     localStorage.setItem('blog_firebase_auth', true);
    //     setIsAuth(true);
    //     // auth finish, then go to home
    //     navigate('/');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
