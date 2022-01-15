import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = React.useState(0);
  const [hero, setHero] = React.useState([]);
  const [round, setRound] = React.useState(0);
  const [clicked, setClick] = React.useState(false);
  React.useEffect(()=> {
    fetch('https://rickandmortyapi.com/api/character', 
    {mode: 'cors'})
    .then(response => response.json())
    .then(data => setHero(data.results))
    .catch(error => console.error(error));
  }, [round]);
  let shuffledArray = [];
  const shuffle = () => {
    shuffledArray = hero.sort((a, b) => 0.5 - Math.random());
    return shuffledArray;
  }
  // temporarily hardcode shuffle function for testing
  shuffle();
  const cards = shuffledArray.map(item => <Cards key={item.id} item={item}/>);
  return (
    <div>
      <header>
        <h1>Marvel Memory Cards</h1>
      </header>
      <main>
        <Scoreboard score={score}/>
        {cards}
        {/* <Cards items={hero}/> */}
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
