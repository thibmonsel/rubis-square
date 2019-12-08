import { State } from '../../redux/state';
import { GameDefinition } from '../../services/game-service';

export const getGame = (state: State): GameDefinition | undefined => state.gameState.game;
