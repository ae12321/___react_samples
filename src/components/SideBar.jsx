import React from 'react';
import './SideBar.css';

const SideBar = ({
  activeNote,
  setActiveNote,
  handleDeleteNote,
  handleAddNote,
  notes,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Note</h1>
        <button onClick={handleAddNote}>Add</button>
      </div>
      <div className="sidebar-notes">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`sidebar-note ${activeNote === note.id && 'active'}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.id + ':' + note.title}</strong>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
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
