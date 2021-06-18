import { createStore, applyMiddleware, compose } from 'redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import reducer from 'src/reducers';
import pickyFind from 'src/middlewares/pickyFind';
import signUp from 'src/middlewares/signUp';
import auth from 'src/middlewares/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(reducer,loadFromLocalStorage(), composeEnhancers(
  applyMiddleware(signUp, auth, pickyFind),
));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
