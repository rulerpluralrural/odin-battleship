import Ship from "./Ship.js";

const SIZE = 10

export default class Gameboard {
	constructor() {
		this.board = [];
		this.missedShots = [];
		this.init();
	}

	init() {
		for (let i = 0; i < SIZE; i++) {
			this.board[i] = [];
			this.missedShots[i] = [];
			for (let j = 0; j < SIZE; j++) {
				this.board[i][j] = null;
				this.missedShots[i][j] = false;
			}
		}
	}

	placeShip(ship, x, y, isVertical) {

		if (!this.isValidPlacement(ship, x, y, isVertical)) {
            return false;
        }

		if (isVertical) { 
			for (let i = 0; i < ship.length; i++) {
				this.board[y + i][x] = ship;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[y][x + i] = ship;
			}
		}
		return true;
	}

	isValidPlacement(ship, x, y, isVertical) {

        // if ship is out of bounds
		if (y >= SIZE || x >= SIZE || y < 0 || x < 0) {
            return false
		}

        // if ship does not fit the gameboard
		if (isVertical) {
            if (y + ship.length > SIZE) {
                return false
            }
		} else {
            if (x + ship.length > SIZE) {
                return false
            }
        }

        // if a ship is already in place
        for (let i = 0; i < ship.length; i++) {
            if (this.board[y + i][x]) {
                return false
            }
        }
        for (let i = 0; i < ship.length; i++) {
            if (this.board[y][x + i]) {
                return false
            }
        }

        return true
	}

	receivedAttack(x, y) {
        if (this.board[y][x] === 'X') return 'Already Attacked'

        if (!this.board[y][x]) {
            this.board[y][x] = 'X'
            return this.missedShots[y][x] = true
        }

        this.board[y][x] = 'X'
        return this.board[y][x].hit()
    }
}
