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

	randomAttack( enemyBoard) {
		const randomRow = Math.floor(Math.random() * 10)
		const randomColumn = Math.floor(Math.random() * 10)

		const attacked = enemyBoard.receiveAttack(randomRow, randomColumn);

		if (attacked === "Already Attacked") {
			return this.randomAttack(enemyBoard);
		} else {
			return { x :randomRow, y: randomColumn, result: attacked };
		}
		
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
		return this.ships.every(ship => ship.isSunk())
	}
}
