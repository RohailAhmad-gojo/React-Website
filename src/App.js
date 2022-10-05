import './App.css';
import About from './components/about/About';
import Featured from './components/featured/Featured';
import Home from './components/home page/Home';
import Navbar from './components/navbar/Navbar';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/team/Team';
import Tree from './components/Treehouse/Tree';
// import Video from './components/videoplayer/Video';
import Wallpaper from './components/wallpaper/Wallpaper';
import Footer from "./components/footer/Footer"
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Video /> */}
      <About />
      <Featured />
      <Wallpaper />
      <Roadmap />
      <Tree />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
