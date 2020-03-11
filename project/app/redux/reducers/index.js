import { combineReducers } from 'redux';
import RegisterReducer from './RegisterReducer';

const rootReducer = combineReducers({ memberDetails: RegisterReducer });

export default rootReducer;
