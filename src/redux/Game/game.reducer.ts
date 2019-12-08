import { Reducer } from 'react';

import { GameState } from '../state';
import { GameActions } from './game.actions';
import { CLICK } from './game.constants';

import { defaultProcessClick } from '../../services/game-service';

export const reducer: Reducer<GameState, GameActions> = (state: GameState, action: GameActions): GameState => {
  switch (action.type) {
    case CLICK:
      if (!state.game) {
        return { ...state };
      }
      return { ...state, game: defaultProcessClick(state.game, action.payload.x, action.payload.y) };
    default:
      return { ...state };
  }
};
