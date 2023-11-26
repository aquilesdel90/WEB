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
import { Helmet } from 'react-helmet';

import MetaLogo from './assets/metalogo.png';

function App() {
  return (
    <div className="relative">
      <Helmet>
        <title>Gunny Games</title>
        <meta name="description" content="Gunny Games" />
        <meta property="og:title" content="Gunny Games" />
        <meta
          property="og:description"
          content="Gunny Games es un shooter en tercera persona."
        />
        <meta property="og:image" content={MetaLogo} />
        <meta property="og:url" content="https://www.gunnygames.com/" />
      </Helmet>
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
      {/* <div id="team">
        <Team />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
