import _ from 'lodash';
import { SOURCE_LIST } from '../actions/index';
import { SELECT_SOURCE } from '../actions/index';

export default function(state={}, action){
  switch (action.type) {
    case SOURCE_LIST:
       return _.mapKeys(action.payload.data, 'id');
       //return [action.payload.data];
    default:
       return state;
    }

}
