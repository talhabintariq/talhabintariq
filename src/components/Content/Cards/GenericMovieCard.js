import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class GenericCard extends Component {
  render() {
    const {
      title, overview, to, buttonTitle, src,
    } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {overview}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="projectButton">
          <Link to={to}>{buttonTitle}</Link>
        </Card.Footer>
      </Card>
    );
  }
}

GenericCard.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  to: PropTypes.string,
  buttonTitle: PropTypes.string,
  src: PropTypes.string,
};

GenericCard.defaultProps = {
  title: '',
  overview: '',
  to: '/',
  buttonTitle: '',
  src: '',
};
