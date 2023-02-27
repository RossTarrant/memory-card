import { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import Gameboard from './Gameboard';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect( () => {
    compareBestScore();
  }, [score])

  const increaseScore = () => {
    setScore(score+1);
  }

  const resetScore = () => {
    setScore(0);
  }

  const compareBestScore = () => {
    if (score > bestScore){
      setBestScore(score);
    }
  }

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Gameboard increaseScore={increaseScore} resetScore={resetScore}/>
    </div>
  );
}

export default App;
