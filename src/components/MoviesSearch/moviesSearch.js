import React, { Component } from 'react';
import {
  Container, Jumbotron, Form,
} from 'react-bootstrap';
import $ from 'jquery';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MovieRow.scss';
import MovieRow from './MovieRow';

class MoviesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.performSearch('A');
  }

  performSearch(searchTerm) {
    console.log('Perform search using moviedb');
    /*  eslint-disable  */
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=' + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('Fetched data successfully');
        const results = searchResults.results;

        var movieRows = []

        results.forEach((movie) => {
          movie.posterSrc = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }
  /*  eslint-enable  */

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    const { rows } = this.state;
    return (
      <>
        <Header />
        <Container>
          <Jumbotron className="titleBar">
            <table className="movieRow">
              <tbody>
                <tr>
                  <td>
                    <img className="poster" alt="app icon" width="112" src={require('../../assets/green_app_icon.svg')} />
                  </td>
                  <td width="8" />
                  <td>
                    <h1 className="titleText">Movies Search</h1>
                  </td>
                </tr>
              </tbody>
            </table>
          </Jumbotron>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                size="lg"
                type="email"
                className="search"
                onChange={e => this.searchChangeHandler(e)}
                placeholder="Enter Movie Name"
                style={{
                  fontSize: 24,
                  display: 'block',
                  width: '100%',
                  paddingTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  borderRadius: 5,
                }}
              >
              </Form.Control>
            </Form.Group>
          </Form>
          <div className="movieRows">
            {rows}
          </div>

        </Container>
        <Footer />
      </>
    );
  }
}

export default MoviesSearch;
