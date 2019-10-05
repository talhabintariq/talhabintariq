import React, { Component } from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    const year = moment().format('YYYY');
    return (
      <div className="footer">
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto footer-text">
            <span className="footer-text-copyright">
              Copyright &copy; <Link to="/">Talha Bin Tariq</Link> {year}
            </span>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
