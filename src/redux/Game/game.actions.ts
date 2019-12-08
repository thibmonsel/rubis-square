import { CLICK } from './game.constants';

export const click = (x: number, y: number) => ({
  type: CLICK as typeof CLICK,
  payload: { x, y },
});

export type GameActions = ReturnType<typeof click>;
