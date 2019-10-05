import React from 'react';
import PropTypes from 'prop-types';

class MovieRow extends React.Component {
  viewMovie() {
    const { movie: { id } } = this.props;
    const url = `https://www.themoviedb.org/movie/ + ${id}`;
    window.location.href = url;
  }

  render() {
    const {
      movie: {
        id,
        posterSrc,
        title, overview,
      },
    } = this.props;
    return (
      <table key={id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="150" src={posterSrc} />
            </td>
            <td>
              <h3>{title}</h3>
              <p>{overview}</p>
              <input className="btn-primary btn-lg" type="button" onClick={this.viewMovie.bind(this)} value="View" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

MovieRow.propTypes = {
  movie: PropTypes.object,
};

MovieRow.defaultProps = {
  movie: {},
};

export default MovieRow;
