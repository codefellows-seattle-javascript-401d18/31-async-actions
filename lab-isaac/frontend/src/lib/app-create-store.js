import {createStore, applyMiddleware} from 'redux';
import reporter from './redux-reporter';
import reducer from '../reducer';
import thunk from './redux-thunk';

export default () => createStore(reducer, applyMiddleware(thunk, reporter));
