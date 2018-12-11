import { combineReducers } from 'redux';
import SourceListReducer from './reducer_sourceList';

const rootReducer = combineReducers({
   sourceList : SourceListReducer
});

export default rootReducer;
