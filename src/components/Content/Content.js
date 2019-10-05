import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import CardsDeck from './Cards/CardsDeck';
import './Content.scss';

export default class Content extends Component {
  render() {
    return (
      <Container id="content-container">
        <CardsDeck />
      </Container>
    );
  }
}
