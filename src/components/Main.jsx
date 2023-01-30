import React from 'react';
import './Main.css';

const Main = ({ activeNote }) => {
  console.log(activeNote);
  if (!activeNote) {
    return <div className="not-found">not found</div>;
  }
  return (
    <div className="main">
      <div className="note-edit">
        <input type="note-edit-text" />
        <textarea placeholder="input note..."></textarea>
      </div>
      <div className="note-preview">
        <h2 className="note-preview-title">{activeNote.title}</h2>
        <div className="note-preview-markdown">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
