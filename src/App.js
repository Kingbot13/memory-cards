import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = React.useState({
    score: 0,
    bestScore: 0
  });
  const [hero, setHero] = React.useState([]);
  const [round, setRound] = React.useState(0);
  const [clicked, setClick] = React.useState([]);
  React.useEffect(()=> {
    fetch('https://rickandmortyapi.com/api/character', 
    {mode: 'cors'})
    .then(response => response.json())
    // set initial hero state
    .then(data => setHero(data.results))
    .catch(error => console.error(error));
  }, [round]);
  // randomize hero state array
  function shuffle(e) {
    if(isClicked(e)) {
      setScore((prev)=> {
        return {
          ...prev,
          score: 0
        }
      });
      setClick([]);
    } else {
      setHero((item)=> item.slice().sort((a, b) => 0.5 - Math.random()));
      // set score
      setScore((prev)=> {
        return {
          ...prev, 
          score: score.score + 1
        }
      });
      newBest();

    }  
  }

  function newBest() {
    if (score.score >= score.bestScore) {
      setScore((prev)=> {
        return {
          ...prev,
          bestScore: score.score +1,
        }
      });
    }
  }

  function isClicked(e) {
    let id = e.currentTarget.dataset.id;
    if (!clicked.includes(id)){
      setClick((prev) => [...prev, id]);
      return false;
    } else {  
      return true;
    }
  }


  return (
    <div className='main-container'>
      <header>
        <h1>Rick & Morty Memory Cards</h1>
      </header>
      <main>
        <Scoreboard score={score.score} bestScore={score.bestScore}/>
        <div className='cards-container'>
          {hero.map(item => <Cards key={item.id} item={item} shuffle={shuffle}/>)}
        </div>
      </main>
      <footer>
        <p>Created by Dylan King</p>
      </footer>
    </div>
  );
}

export default App;

// https://gateway.marvel.com:443/v1/public/characters?limit=12&apikey=2980ee1642884fc22f7e95c8a23acb2d

// rick & morty https://rickandmortyapi.com/api/character
