import React from 'react';
import './Create.css';

const Create = () => {
  return (
    <div className="createPost">
      {/* some parts move all at once*/}
      <div className="container">
        <h1>post entry</h1>
        <div className="inputPost">
          <div>title</div>
          <input type="text" placeholder="input title" />
        </div>
        <div className="inputPost">
          <div>body</div>
          <textarea placeholder="input body"></textarea>
        </div>
        <button className="postbutton">send</button>
      </div>
    </div>
  );
};

export default Create;
