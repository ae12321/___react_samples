import React, { useState } from 'react';
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const createPost = () => {
    console.log({ title, postText });
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
