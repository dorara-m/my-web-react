import "./styles/reset.scss";
import "./styles/global.scss";

import MainVisual from "./components/MainVisual";
import Works from "./components/Works";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import ReleaseNotes from "./components/ReleaseNotes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <MainVisual />
      <Works />
      <Profile />
      <Skills />
      <ReleaseNotes />
      <Footer />
    </div>
  );
}

export default App;
