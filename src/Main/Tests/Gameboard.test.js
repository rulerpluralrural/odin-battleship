import Gameboard from "../Gameboard.js";
import Ship from "../Ship.js";

describe('Gameboard', () => {
    let testShip;
    let testBoard;
    let testBoardArray;
    let testMissedShotArray;

    beforeEach(() => {
        testShip = new Ship(4)
        testBoard = new Gameboard
        testBoardArray = []
        testMissedShotArray = []
        for (let i = 0; i < 10; i++) {
			testBoardArray[i] = [];
			testMissedShotArray[i] = [];
			for (let j = 0; j < 10; j++) {
				testBoardArray[i][j] = null;
				testMissedShotArray[i][j] = false;
			}
		}
    })

    it('initialize gameboard', () => {
        expect(testBoard).toEqual({
            board: testBoardArray,
            missedShots: testMissedShotArray
        })
    })

    it('place a ship', () => {
        testBoard.placeShip(testShip, 1, 1, true)
        testBoardArray[1][1] = testShip
        testBoardArray[2][1] = testShip
        testBoardArray[3][1] = testShip
        testBoardArray[4][1] = testShip
        // console.table(testBoard.board)
        // console.table(testBoardArray)
        expect(testBoard).toEqual({
            board: testBoardArray,
            missedShots: testMissedShotArray
        })
    })

    it('check out of bounds ships', () => {
        expect(testBoard.isValidPlacement(testShip, 0, 9, true)).toBe(false)
        expect(testBoard.isValidPlacement(testShip, 10, 1, true)).toBe(false)
        expect(testBoard.isValidPlacement(testShip, 1, 10, true)).toBe(false)
    })
})