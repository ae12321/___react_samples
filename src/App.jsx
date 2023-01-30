import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>hello</h1>
      <p>count: {counter}</p>
      <button onClick={() => dispatch()}>+</button>
      {isLogin ? <p>success login</p> : <p>fail login...</p>}
    </div>
  );
}

export default App;
