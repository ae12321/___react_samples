import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const handleAddNote = () => {
    console.log('add note');
    const newState = [
      ...notes,
      {
        id: uuid(),
        title: 'note title xx',
        content: 'new note created!',
        lastEditBy: Date.now(),
      },
    ];
    setNotes(newState);
    console.log(notes);
  };

  const handleDeleteNote = (id) => {
    const newState = notes.filter((note) => note.id !== id);
    setNotes(newState);
  };

  const getActiveNote = (id) => {
    return notes.find((note) => note.id === id);
  };
  console.log(getActiveNote(activeNote));

  const updateNotes = (updatedNote) => {
    const notesUpdated = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(notesUpdated);
  };

  return (
    <div className="App">
      <SideBar
        handleDeleteNote={handleDeleteNote}
        handleAddNote={handleAddNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote(activeNote)} updateNotes={updateNotes} />
    </div>
  );
}

export default App;
