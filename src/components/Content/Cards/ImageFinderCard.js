import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ImageFinderCard extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={require('../../../assets/react_icon.png')} />
        <Card.Body>
          <Card.Title>Image Finder using React & Material UI</Card.Title>
          <Card.Text>
          The image finder searches for images through PixaBay API.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="projectButton">
          <Link to="/image_finder">Image Finder</Link>
        </Card.Footer>
      </Card>
    );
  }
}
