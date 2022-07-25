import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import './style/Pages.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div id="search-cont">
        <Search />
      </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies/:name" element={<Movies />}/>
          <Route path="/movie/:id" element={<Movie />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
