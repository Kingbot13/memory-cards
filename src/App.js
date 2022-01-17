import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = React.useState(0);
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
  let shuffledArray = [];
  // randomize hero state array
  function shuffle(e, id) {
    isClicked(e);
    
    shuffledArray = hero.sort((a, b) => 0.5 - Math.random());
    console.log('shuffle', shuffledArray);
    // console.log('id', id);   
    setHero((prev)=> [...prev, shuffledArray]);
    setScore(score + 1);
    return shuffledArray;
  }
  console.log(shuffledArray);
  if (shuffledArray === []){
    return shuffle(); 

  }

  function isClicked(e) {
    if (clicked.includes(e.target.dataset.id)){
      setClick((prev) => [...prev, e.target.dataset.id]);
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      <header>
        <h1>Marvel Memory Cards</h1>
      </header>
      <main>
        <Scoreboard score={score}/>
        {hero.map(item => <Cards key={item.id} item={item} shuffle={(e)=>shuffle(e, item.id)}/>)}
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
