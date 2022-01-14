import './App.css';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <header>
        <h1>Marvel Memory Cards</h1>
      </header>
      <main>
        <Scoreboard />
        <Cards />
      </main>
      <footer>
        <p>Created by Dylan King</p>
      </footer>
    </div>
  );
}

export default App;

// http://gateway.marvel.com/v1/public/comics?apikey=2980ee1642884fc22f7e95c8a23acb2d
