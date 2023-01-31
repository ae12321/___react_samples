import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>hello</h1>
      <p>count: {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>+</button>
      {isLogin ? <p>success login</p> : <p>fail login...</p>}
      <button onClick={() => dispatch(login())}></button>
    </div>
  );
}

export default App;
