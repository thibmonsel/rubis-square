import { getGridDisplay } from '../theme';

describe('Theme function test', (): void => {
  describe('getGridDisplay should return the correct display', (): void => {
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
