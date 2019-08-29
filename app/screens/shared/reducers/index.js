import { combineReducers } from 'redux';
import bookingDetailReducer from '../reducers/bookingDetailReducer';

const reducers = {
  bookingDetailReducer,
};

const AppReducer = combineReducers(reducers);

export default AppReducer;
