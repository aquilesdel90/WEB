import "./App.css";
import Factions from "./pages/Factions";
import Footer from "./pages/Footer";
import GameModes from "./pages/GameModes";
import Home from "./pages/Home";
import Inugis from "./pages/Inugis";
import Roadmap from "./pages/Roadmap";
import Skins from "./pages/Skins";
import Team from "./pages/Team";
import Tokens from "./pages/Tokens";
import Whatis from "./pages/Whatis";

function App() {
  return (
    <div className="relative">
      <Home />
      <Whatis />
      <Factions />
      <Inugis />
      <Skins />
      <GameModes />
      <Tokens />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
