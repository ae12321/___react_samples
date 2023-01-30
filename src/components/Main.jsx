import React from 'react';
import './Main.css';

const Main = ({ activeNote, updateNotes }) => {
  console.log(activeNote);
  if (!activeNote) {
    return <div className="not-found">not found</div>;
  }

  const handleChange = (name, value) => {
    updateNotes({
      ...activeNote,
      [name]: value,
      lastEditBy: Date.now(),
    });
  };

  return (
    <div className="main">
      <div className="note-edit">
        <input
          type="note-edit-text"
          value={activeNote.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        <textarea
          placeholder="input note..."
          value={activeNote.content}
          onChange={(e) => handleChange('content', e.target.value)}
        ></textarea>
      </div>
      <div className="note-preview">
        <h2 className="note-preview-title">{activeNote.title}</h2>
        <div className="note-preview-markdown">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
