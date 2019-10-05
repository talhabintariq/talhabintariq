import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviesSearch from './components/MoviesSearch/moviesSearch';
import ImageFinder from './components/ImageFinder/ImageFinder';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/movies_search/" component={MoviesSearch} />
        <Route path="/image_finder/" component={ImageFinder} />
      </Router>
    </>
  );
}

export default App;
