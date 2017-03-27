
/**
 * Created by ngocsontran on 3/24/17.
 */


import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp

// combineReducers sẽ tập hợp các sub-reducers lại