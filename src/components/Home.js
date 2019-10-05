import React, { Component } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}
