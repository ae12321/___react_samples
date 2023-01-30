import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="note-edit">
        <input type="note-edit-text" />
        <textarea placeholder="input note..."></textarea>
      </div>
      <div className="note-preview">
        <h2 className="note-preview-title">title</h2>
        <div className="note-preview-markdown">convert markdown</div>
      </div>
    </div>
  );
};

export default Main;
