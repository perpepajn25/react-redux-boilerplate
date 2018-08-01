import { createStore, /* applyMiddleware, compose */} from 'redux';
import rootReducer from '../reducers';
// import thunk from 'redux-thunk';

// If you want to use...
// THUNK: uncomment applyMiddleware on line 1, uncomment line 3 & 13, and add a comma at the end of line 12
// THUNK AND REDUX DEV TOOLS: same as above but also uncomment lines 10 and 15

export default function configureStore() {
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    // composeEnhancers(
        // applyMiddleware(thunk)
    // )
  );
}
