import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container } from 'react-bootstrap';
import NavBar from './navbar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Search from './search/Search';

export default class ImageFinder extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <MuiThemeProvider>
            <div>
              <NavBar />
              <Search />
            </div>
          </MuiThemeProvider>
        </Container>
        <Footer />
      </>
    );
  }
}
