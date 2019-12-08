import { GameDefinition } from '../../services/game-service';
import { getGridDisplay } from '../theme';

describe('Theme function test', (): void => {
  describe('getGridDisplay should return the correct display', (): void => {
    const game: GameDefinition = {
      nbColor: 3,
      board: [
        [0, 1, 2, 1, 2],
        [0, 1, 2, 1, 2],
        [0, 1, 2, 1, 2],
        [0, 1, 2, 1, 2],
        [0, 1, 2, 1, 2],
      ],
    };
    const testsCases = [
      {
        game: {
          nbColor: 3,
          board: [
            [0, 1, 2, 1, 2],
            [0, 1, 2, 1, 2],
            [0, 1, 2, 1, 2],
            [0, 1, 2, 1, 2],
            [0, 1, 2, 1, 2],
          ],
        },
        expectedValue: ' 1fr 1fr 1fr 1fr 1fr',
      },
    ];
    testsCases.forEach(testCase => {
      it(`Should return ${testCase.expectedValue}`, () => {
        expect(getGridDisplay(testCase.game)).toEqual(testCase.expectedValue);
      });
    });
  });
});
