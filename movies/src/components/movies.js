import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Link } from 'react-router-dom';

class Movies extends Component {
  componentDidMount(){
    this.props.getMovies();
  }

  render(){
    return(
      <div>
        <h1>Movies</h1>
        <ul className='movieList'>
          { this.props.movies.map((movie, i) => {
            return(
                <Link className="movieLinks" to={`/${movie.id}`} key={movie.id+i}>{movie.title}</Link>
            )
          })}
        </ul>
        <Link to='/newMovieForm'>Add a New Movie</Link>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { getMovies })(Movies);
