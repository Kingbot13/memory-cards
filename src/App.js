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
  function shuffle(e) {
    console.log('event', e);
    if(isClicked(e)) {
      // console.log(isClicked);
      setScore(0);
    } else {
      shuffledArray = hero.sort((a, b) => 0.5 - Math.random());
      console.log('shuffle', shuffledArray);  
      setHero((prev)=> [...prev, shuffledArray]);
      setScore(score + 1);
      return shuffledArray;

    }
    
  }
  console.log(shuffledArray);
  if (shuffledArray === []){
    return shuffle(); 

  }

  function isClicked(e) {
    let id = e.currentTarget.dataset.id;
    console.log('target', id);
    if (!clicked.includes(id)){
      setClick((prev) => [...prev, id]);
      console.log('false');
      return false;
    } else {
      console.log('true');
      return true;
    }
  }

  // document.addEventListener('click', isClicked);

  return (
    <div>
      <header>
        <h1>Marvel Memory Cards</h1>
      </header>
      <main>
        <Scoreboard score={score}/>
        {hero.map(item => <Cards key={item.id} item={item} shuffle={shuffle}/>)}
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
