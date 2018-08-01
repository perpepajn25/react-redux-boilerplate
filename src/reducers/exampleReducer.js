// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { /* your type here, CHANGE_MESSAGE */ CHANGE_MESSAGE} from '../actions/types'


const initialState = {
  exampleMessage: 'Hello World'
}

const exampleReducer = (state = initialState, action) => {
  switch (action.type){

    case CHANGE_MESSAGE:
    console.log(action)
    return {exampleMessage: 'Hola Mundo'}

    default:
    return state

  }
}

export default exampleReducer
