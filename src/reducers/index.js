import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer'
//import top level reducers

const rootReducer = combineReducers({
  //your reducers here
  exampleState: exampleReducer
})

export default rootReducer;
