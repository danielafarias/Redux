import { clickReducer } from './clickReducer';
// import { otherReducer } from './otherReducer';
import { combineReducers } from 'redux'; // combina vários reducers para mandar para store

export const Reducers = combineReducers({
    clickState: clickReducer,
    // otherState: otherReducer
});