import Gameboard from "../Gameboard.js";
import Player from "../Player.js";
import Ship from "../Ship.js";

describe("Gameboard", () => {
	let testShip;
	let testBoard;
	let testBoardArray;

	beforeEach(() => {
		testShip = new Ship(4);
		testBoard = new Gameboard();
		testBoardArray = [];
		for (let i = 0; i < 10; i++) {
			testBoardArray[i] = [];
			for (let j = 0; j < 10; j++) {
				testBoardArray[i][j] = null;
			}
		}
	});

	it("initialize gameboard", () => {
		expect(testBoard).toEqual({
			board: testBoardArray
		});
	});

	it("place a ship", () => {
		testBoard.placeShip(testShip, 1, 1, true);
		testBoardArray[1][1] = testShip;
		testBoardArray[2][1] = testShip;
		testBoardArray[3][1] = testShip;
		testBoardArray[4][1] = testShip;
		// console.table(testBoard.board)
		// console.table(testBoardArray)
		expect(testBoard).toEqual({
			board: testBoardArray
		});
	});

	it("check out of bounds ships", () => {
		expect(testBoard.isValidPlacement(testShip, 9, 0, true)).toBe(false);
		expect(testBoard.isValidPlacement(testShip, 10, 1, true)).toBe(false);
		expect(testBoard.isValidPlacement(testShip, 1, 10, true)).toBe(false);
	});

	it("check if ship does not fit the gameboard", () => {
		expect(testBoard.isValidPlacement(testShip, 1, 9, false)).toBe(false);
		expect(testBoard.isValidPlacement(testShip, 8, 3, true)).toBe(false);
		expect(testBoard.isValidPlacement(testShip, 7, 9, false)).toBe(false);
	});

	it("check if board is taken", () => {
		testBoard.placeShip(testShip, 1, 3, true);
		expect(testBoard.isValidPlacement(testShip, 2, 0, false)).toBe(false);
		expect(testBoard.isValidPlacement(testShip, 4, 3, true)).toBe(false);
		expect(testBoard.isValidPlacement(testShip, 1, 3, false)).toBe(false);
	});

	it("test if ship is attacked", () => {
		testBoard.placeShip(testShip, 3, 3, true);
        testBoard.receiveAttack(3, 3);
		testBoard.receiveAttack(4, 3);
        testBoard.receiveAttack(5, 3);
        testBoard.receiveAttack(1, 1);
        expect(testBoard.board[3][3]).toBe("X");
		expect(testBoard.board[4][3]).toBe("X");
        expect(testBoard.board[5][3]).toBe("X");
        expect(testBoard.board[1][1]).toBe("X");
	});

    it('test if same coordinate is attacked', () => {
        testBoard.receiveAttack(3, 3);
        expect(testBoard.receiveAttack(3, 3)).toBe('Already Attacked')
    })

    it('check for missed shots', () => {
        testBoard.placeShip(testShip, 3, 3, true);
        console.table(testBoard.board)
        expect(testBoard.receiveAttack(3, 4)).toBe('Missed')
    })

	const player = new Player('Player')
	const enemyBoard = new Gameboard()
	const newShip = new Ship(10)
	for (let i = 0; i < 10; i++) {
		enemyBoard.placeShip(newShip, i, 0, false)
	}
	console.log(player.randomAttack(enemyBoard))
});
