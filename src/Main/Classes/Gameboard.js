const SIZE = 10;

export default class Gameboard {
	constructor() {
		this.board = [];
		this.init();
	}

	init() {
		for (let i = 0; i < SIZE; i++) {
			this.board[i] = [];
			for (let j = 0; j < SIZE; j++) {
				this.board[i][j] = null;
			}
		}
	}

	placeShip(ship, row, column, isVertical) {
		if (!this.isValidPlacement(ship, row, column, isVertical)) {
			return false;
		}

		if (isVertical) {
			for (let i = 0; i < ship.length; i++) {
				this.board[row + i][column] = ship;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[row][column + i] = ship;
			}
		}
		return true;
	}

	isValidPlacement(ship, row, column, isVertical) {
		// if ship is out of bounds
		if (row >= SIZE || column >= SIZE || row < 0 || column < 0) {
			return false;
		}

		// if ship does not fit the gameboard
		if (isVertical) {
			if (row + ship.length > SIZE) {
				return false;
			}
			// if a ship is already in place
			for (let i = 0; i < ship.length; i++) {
				if (this.board[row + i][column]) {
					return false;
				}
			}
		} else {
			if (column + ship.length > SIZE) {
				return false;
			}
			for (let i = 0; i < ship.length; i++) {
				if (this.board[row][column + i]) {
					return false;
				}
			}
		}

		return true;
	}

	receiveAttack(row, column) {
		if (this.board[row][column] === "X") return "Already Attacked";

		if (!this.board[row][column]) {
			this.board[row][column] = "X";
			return 'Missed'
		}

		const ship = this.board[row][column];
		this.board[row][column] = "X";
		return ship.hit();
	}
}
