import Gameboard from "./Gameboard.js";

export default class Player {
	constructor(name, ships = []) {
		this.name = name;
		this.playerBoard = new Gameboard();
		this.ships = ships;
	}

	attack(row, column, enemyBoard) {
		return enemyBoard.receiveAttack(row, column);
	}

	placeRandomShips() {
		for (let i = 0; i < this.ships.length; ) {
			const randomRow = Math.floor(Math.random() * 10);
			const randomColumn = Math.floor(Math.random() * 10);
			const randomOrientation = Math.random() < 0.5;
			const ship = this.ships[i];

			if (
				this.playerBoard.placeShip(
					ship,
					randomRow,
					randomColumn,
					randomOrientation
				)
			) {
				i += 1;
			}
		}
	}

	checkAllShips() {
		return this.ships.every((ship) => ship.isSunk());
	}

	randomAttack(enemyBoard) {
		const randomRow = Math.floor(Math.random() * 10);
		const randomColumn = Math.floor(Math.random() * 10);

		const attacked = enemyBoard.receiveAttack(randomRow, randomColumn);

		if (attacked === "Already Attacked") {
			return this.randomAttack(enemyBoard);
		} else {
			return { x: randomRow, y: randomColumn, result: attacked };
		}
	}
}

export class AI extends Player {
	constructor(name, ships = []) {
		super(name, ships);
		this.placeRandomShips();
		this.lasHit = null;
	}

	smartRandomAttack(enemyBoard) {
		if (!this.lasHit) return this.randomAttack(enemyBoard);

		const x = this.lasHit[0];
		const y = this.lasHit[1];

		const validAdjacentCells = this.getAdjacentCell(x, y).filter(
			([adjacentX, adjacentY]) => {
				return (
					adjacentX >= 0 &&
					adjacentY >= 0 &&
					adjacentX < this.playerBoard.board.length &&
					adjacentY < this.playerBoard.board.length &&
					enemyBoard.board[adjacentX][adjacentY] !== "X"
				);
			}
		);

		if (validAdjacentCells.length === 0) {
			return this.randomAttack(enemyBoard);
		} else {
			// Choose a random valid adjacent cell and attack it
			const randomIndex = Math.floor(Math.random() * validAdjacentCells.length);
			const [randomAdjacentX, randomAdjacentY] =
				validAdjacentCells[randomIndex];
			const attacked = enemyBoard.receiveAttack(
				randomAdjacentX,
				randomAdjacentY
			);

			if (attacked === "Already Attacked") {
				return this.smartRandomAttack(enemyBoard);
			} else {
				this.lastHit = [randomAdjacentX, randomAdjacentY];
				return {
					x: randomAdjacentX,
					y: randomAdjacentY,
					result: attacked,
				};
			}
		}
	}

	getAdjacentCell(x, y) {
		return [
			[x, y - 1],
			[x, y + 1],
			[x - 1, y],
			[x + 1, y],
		];
	}
}
