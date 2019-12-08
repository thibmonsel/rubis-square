import { increment, GameDefinition, defaultProcessClick, isAffectedByDefaultPolicy, isGameWon } from '../game-service';

describe('Game Service Test', (): void => {
  describe('Should increment correctly', (): void => {
    const testsCases = [
      { nbColor: 2, value: 1, expectedValue: 0 },
      { nbColor: 4, value: 1, expectedValue: 2 },
      { nbColor: 7, value: 6, expectedValue: 0 },
    ];
    testsCases.forEach(testCase => {
      it(`Should return ${testCase.expectedValue} with ${testCase.value} and ${testCase.nbColor} colors`, () => {
        expect(increment(testCase.nbColor)(testCase.value)).toEqual(testCase.expectedValue);
      });
    });
  });

  describe('Should find affected tile with default policy', (): void => {
    const testsCases = [
      { xClick: 2, yClick: 1, x: 2, y: 1, expectedValue: true },
      { xClick: 2, yClick: 1, x: 3, y: 4, expectedValue: false },
      { xClick: 2, yClick: 1, x: 1, y: 2, expectedValue: false },
      { xClick: 2, yClick: 1, x: 1, y: 1, expectedValue: true },
      { xClick: 2, yClick: 1, x: 2, y: 2, expectedValue: true },
      { xClick: 0, yClick: 1, x: 2, y: 2, expectedValue: false },
      { xClick: 0, yClick: 1, x: 1, y: 0, expectedValue: false },
    ];
    testsCases.forEach(testCase => {
      const { xClick, yClick, x, y, expectedValue } = testCase;
      it(`Should return ${expectedValue} with xClick:${xClick};yClick:${yClick} and x:${x};y:${y}`, () => {
        expect(isAffectedByDefaultPolicy(xClick, yClick)(x, y)).toEqual(expectedValue);
      });
    });
  });

  describe('Should process default click', (): void => {
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
        x: 2,
        y: 1,
        expectedValue: [
          [0, 1, 0, 1, 2],
          [0, 2, 0, 2, 2],
          [0, 1, 0, 1, 2],
          [0, 1, 2, 1, 2],
          [0, 1, 2, 1, 2],
        ],
      },
      {
        x: 0,
        y: 0,
        expectedValue: [
          [1, 2, 2, 1, 2],
          [1, 1, 2, 1, 2],
          [0, 1, 2, 1, 2],
          [0, 1, 2, 1, 2],
          [0, 1, 2, 1, 2],
        ],
      },
    ];

    testsCases.forEach(testCase => {
      it(`Should process accordingly x:${testCase.x} et y:${testCase.y}`, () => {
        expect(defaultProcessClick(game, testCase.x, testCase.y).board).toEqual(testCase.expectedValue);
      });
    });
  });

  describe('Should find if a game is won or not with isGameWon', (): void => {
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
        expectedValue: false,
        description: 'random game',
      },
      {
        game: {
          nbColor: 3,
          board: [
            [1, 1, 1],
            [2, 2, 2],
            [0, 0, 0],
          ],
        },
        expectedValue: false,
        description: 'game in line',
      },
      {
        game: {
          nbColor: 3,
          board: [
            [1, 2, 1],
            [1, 2, 1],
            [1, 2, 1],
          ],
        },
        expectedValue: false,
        description: 'game in column',
      },
      {
        game: {
          nbColor: 3,
          board: [
            [2, 2, 2],
            [2, 2, 2],
            [2, 2, 2],
          ],
        },
        expectedValue: true,
        description: 'game won',
      },
    ];

    testsCases.forEach(testCase => {
      const { expectedValue, description, game } = testCase;
      it(`Should return ${expectedValue} with ${description}`, () => {
        expect(isGameWon(game)).toEqual(expectedValue);
      });
    });
  });
});
