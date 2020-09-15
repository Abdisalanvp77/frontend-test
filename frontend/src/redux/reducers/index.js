import {combineReducers} from 'redux';
import pagesReducer from './pagesReducer';

export default combineReducers({
    pages: pagesReducer
});