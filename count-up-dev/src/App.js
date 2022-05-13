import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';



function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);



  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={increment}>増やす</button>
      <button onClick={decrement}>減らす</button>
    </div>
  );
}

export default App;
