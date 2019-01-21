import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import reducer from '../reducers';
import logger from './logger';
import { history } from './history';

export default function configureStore() {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger,
      ),
    ),
  );
  return store;
}
