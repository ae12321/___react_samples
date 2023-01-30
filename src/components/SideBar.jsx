import React from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Note</h1>
        <button>Add</button>
      </div>
      <div className="sidebar-notes">
        <div className="sidebar-note">
          <div className="sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>This is Note...</p>
          <small>Last Edit: xx:xx</small>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
