import { GET_MOVIE } from '../actions';

export default (movie = [], action) => {

  switch (action.type) {
    case GET_MOVIE:
      return action.payload.data;
    default:
      return movie;
  }
}
