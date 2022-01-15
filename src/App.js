import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = React.useState(0);
  const [hero, setHero] = React.useState([]);
  const [round, setRound] = React.useState(0);
  const [clicked, setClick] = React.useState(false);
  let shuffledArray = [];
  React.useEffect(()=> {
    fetch('https://rickandmortyapi.com/api/character', 
    {mode: 'cors'})
    .then(response => response.json())
    .then(data => setHero(data.results))
    .catch(error => console.error(error));
  }, [round]);
  const shuffle = (id) => {
    shuffledArray = hero.sort((a, b) => 0.5 - Math.random());
    console.log('shuffle', shuffledArray);
    console.log('id', id);
    // setHero(shuffledArray);
    return shuffledArray;
  }
  const newCards = () => {
    setHero(shuffle());
  }
  // shuffle();

  const cards = hero.map(item => <Cards key={item.id} item={item} shuffle={()=>shuffle(item.id)}/>);
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
