import { combineReducers } from 'redux';
import HelloReducers from './HelloReducers';

export default combineReducers({
    hello: HelloReducers
})