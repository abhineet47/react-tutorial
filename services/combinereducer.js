import { combineReducers } from 'redux';

import productReducer from './products/reducers.js';
import filterReducer from './filters/reducer.js';
import git from './git/reducers.js';
export default combineReducers({
	product:productReducer,
	filter:filterReducer,
	git:git,
});
