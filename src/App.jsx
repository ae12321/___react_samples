import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    console.log('add note');
    const newState = [
      ...notes,
      { id: 1, title: 'new note created!', lastEditBy: Date.now() },
    ];
    setNotes(newState);
    console.log(notes);
  };
  return (
    <div className="App">
      <SideBar handleAddNote={handleAddNote} />
      <Main />
    </div>
  );
}

export default App;
