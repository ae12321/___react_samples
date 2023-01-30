import React from 'react';
import './SideBar.css';

const SideBar = ({ handleAddNote, notes }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Note</h1>
        <button onClick={handleAddNote}>Add</button>
      </div>
      <div className="sidebar-notes">
        {notes.map((note, index) => (
          <div key={index} className="sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>Delete</button>
            </div>
            <p>{note.content}</p>
            <small>
              Last Edit:{' '}
              {new Date(note.lastEditBy).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
