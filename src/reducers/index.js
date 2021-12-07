import counterReducer from './counter';
import loggedRecuder from './islogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  count: counterReducer,
  isLogged: loggedRecuder,
});

export default allReducers