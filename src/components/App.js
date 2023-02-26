import { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import Gameboard from './Gameboard';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Gameboard />
    </div>
  );
}

export default App;
