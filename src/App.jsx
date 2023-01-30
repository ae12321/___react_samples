import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';
import uuid from 'react-uuid';
import { useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  const handleAddNote = () => {
    console.log('add note');
    const newState = [
      ...notes,
      {
        id: uuid(),
        title: 'note title xx',
        content: '',
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

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    if (notes.length > 0) {
      setActiveNote(notes[0].id);
    }
  }, []);

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
