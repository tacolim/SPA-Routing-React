import { combineReducers } from 'redux';
import movies from './moviesReducer';
import movie from './movieDetailReducer'

const rootReducer = combineReducers({
  movies,
  movie
});

export default rootReducer;
