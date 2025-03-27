import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Fake Test</h1>
        <p>This is a simple React application.</p>
        <p>Count: {count}</p>
        <Button text="Increment" onClick={incrementCount} />
      </header>
    </div>
  );
}

export default App;