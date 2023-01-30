import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Create from './components/Create';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  // const [isAuth, setIsAuth] = useState(false); // when reload, initial value  every false -> when delete, display state is logouted
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" isAuth={isAuth} element={<Create />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/logout"
          element={<Logout setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
