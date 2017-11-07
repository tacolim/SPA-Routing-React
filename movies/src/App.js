import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Movies, Movie, NewMovieForm } from './components';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Movies} />
        <Route path='/:id' component={Movie} />
        <Route path='/newMovieForm' component={NewMovieForm} />
      </div>
    );
  }
}

export default App;
