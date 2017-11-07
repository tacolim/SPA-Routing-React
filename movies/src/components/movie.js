import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions';
import { Link } from 'react-router-dom';

class Movie extends Component {
  componentDidMount(){
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    return(
      <div>
        <h3>movie title here</h3>
        <Link exact to='/'>Back to Movies Main</Link>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}

export default connect(mapStateToProps, { getMovie })(Movie);
