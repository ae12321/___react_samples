import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

import './Create.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const navigate = useNavigate();

  const createPost = async () => {
    // console.log({ title, postText });
    await addDoc(collection(db, 'posts'), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName, // get auth info
        id: auth.currentUser.uid,
      },
    });

    navigate('/');
  };
  return (
    <div className="createPost">
      {/* some parts move all at once*/}
      <div className="container">
        <h1>post entry</h1>
        <div className="inputPost">
          <div>title</div>
          <input
            type="text"
            placeholder="input title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>body</div>

          <textarea
            placeholder="input body"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postbutton" onClick={createPost}>
          send
        </button>
      </div>
    </div>
  );
};

export default Create;
