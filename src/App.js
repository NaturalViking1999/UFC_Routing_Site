import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Footer from './Footer/Footer';
import Fighters from './components/Fighters/Fighters';
import News from './components/News/News';
import Tournaments from './components/Tournaments/Tournaments';
import Media from './components/Media/Media';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/fighters" element={<Fighters />} />
          <Route path="/news" element={<News />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/media" element={<Media />} />
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
