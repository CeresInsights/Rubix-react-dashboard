import { createStore, compose,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
const configureStore = (initialState) => {
  const middlewares = [
      thunkMiddleware,
  ];


  return createStore(rootReducer, initialState, compose(
      applyMiddleware(...middlewares)
   )
  );

};
export default configureStore;
