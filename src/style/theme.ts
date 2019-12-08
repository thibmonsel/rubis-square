import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import { GameDefinition } from '../services/game-service';

export type CustomTheme = Theme & CustomProps;

export const getGridDisplay = (game: GameDefinition): string =>
  (game.board || []).reduce((acc: string): string => `${acc} 1fr`, '');

interface CustomProps {
  custom: {
    size: {
      tile: number;
    };
    tileColors: Array<string>;
  };
}

export const theme: CustomTheme = {
  ...createMuiTheme({
    palette: {
      //   primary: lol,
    },
  }),
  custom: {
    size: {
      tile: 50,
    },
    tileColors: ['red', 'blue', 'green'],
  },
};
