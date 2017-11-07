import React from 'react';
import { Link } from 'react-router-dom';

const NewMovieForm = () => {
  return(
    <div>
      <h1>NewMovieForm</h1>
      <Link exact to='/'>Back to Movies Main</Link>
    </div>
  )
}

export default NewMovieForm;
