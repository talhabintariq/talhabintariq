import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class MoviesCard extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={require('../../../assets/react_icon.png')} />
        <Card.Body>
          <Card.Title>Movies Search using React</Card.Title>
          <Card.Text>
            The movies searcher, search for movies through MoviesDB API.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="projectButton">
          <Link to="/movies_search">Movies Search</Link>
        </Card.Footer>
      </Card>
    );
  }
}
