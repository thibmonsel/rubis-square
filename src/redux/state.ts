import { GameDefinition } from '../services/game-service';

export interface GameState {
  game?: GameDefinition;
}

export interface State {
  gameState: GameState;
}
