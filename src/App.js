import './App.css';
import Navbar from './components/Navbar';
import Factions from './pages/Factions';
import Footer from './pages/Footer';
import GameModes from './pages/GameModes';
import Home from './pages/Home';
import Inugis from './pages/Inugis';
import Roadmap from './pages/Roadmap';
import Skins from './pages/Skins';
import Team from './pages/Team';
import Tokens from './pages/Tokens';
import Whatis from './pages/Whatis';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="whatis">
        <Whatis />
      </div>
      <div id="factions">
        <Factions />
      </div>
      <div id="inugis">
        <Inugis />
      </div>
      <div id="skins">
        <Skins />
      </div>
      <div id="game-modes">
        <GameModes />
      </div>
      <div id="tokens">
        <Tokens />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
