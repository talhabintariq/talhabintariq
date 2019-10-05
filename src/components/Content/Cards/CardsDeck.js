import React, { Component } from 'react';
import {
  CardDeck,
} from 'react-bootstrap';
import GeneriCard from './GenericMovieCard';
//  import MoviesCard from './MoviesCard';
//  import ImageFinderCard from './ImageFinderCard';
import '../Content.scss';

export default class CardsDeck extends Component {
  render() {
    return (
      <CardDeck>
        <GeneriCard
          title="Movies Search using React"
          src={require('../../../assets/react_icon.png')}
          to="/movies_search"
          buttonTitle="Movies Search"
          overview="The movies searcher, search for movies through MoviesDB API."
        />
        <GeneriCard
          title="Image Finder using React & Material UI"
          src={require('../../../assets/reactjs-materialUI.png')}
          to="/image_finder"
          buttonTitle="Image Finder"
          overview="The image finder searches for images through PixaBay API."
        />
        <GeneriCard />
        <GeneriCard />
      </CardDeck>
    );
  }
}
