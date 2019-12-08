import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, compose, createStore } from 'redux';
import { Reducer } from 'redux';
import { GameState } from './state';

import { history, middleware } from './Router/router';

import { reducer as GameReducer } from './Game/game.reducer';
import { GameActions } from './Game/game.actions';

const rootReducer = combineReducers({
  router: connectRouter(history),
  gameState: GameReducer as Reducer<GameState, GameActions>,
});

const initialState = {
  gameState: {
    game: {
      nbColor: 3,
      board: [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
  },
};
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(middleware, sagaMiddleware)),
);
