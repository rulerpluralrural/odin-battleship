import BoardController from "./BoardController";
import Player from "./Player";
import Ship from "./Ship";

export default class Game {
	static player = new Player("Player", [
		new Ship(5, "Carrier"),
		new Ship(4, "Battleship"),
		new Ship(3, "Destroyer"),
		new Ship(3, "Submarine"),
		new Ship(2, "Patrol Boat"),
	]);

	static AI = new Player("AI", [
		new Ship(5, "Carrier"),
		new Ship(4, "Battleship"),
		new Ship(3, "Destroyer"),
		new Ship(3, "Submarine"),
		new Ship(2, "Patrol Boat"),
	]);

	static shipIndex = 0;
	static isVertical = true;
	static isGameOver = false;
	static controller1 /**@type {BoardController} */;
	static controller2 /**@type {BoardController} */;
	static current /**@type {BoardController} */;

	static setUpGame(controller1, controller2) {
		this.controller1 = controller1;
		this.controller2 = controller2;
		this.current = controller1;

		this.AI.placeRandomShips();
		controller1.showBoardShips();
		controller1.disableBoard();
	}

	static changeTurn() {
		let prev = this.current;
		let current =
			this.current === Game.controller1 ? this.controller2 : this.controller1;

		if (current.player.name === "AI") {
			current.disableBoard();
			prev.enableBoard();
		}

		this.current = current;
		current.disableBoard();
		prev.enableBoard();

		if (current.player.name === "AI") {
			this.handleAIAttack()
		}
	}

	static handleAIAttack() {
		console.log("waw");
	}

	static attack(x, y, currentPlayer) {
		const targetCell = currentPlayer.querySelector(
			`[data-x="${y}"][data-y="${x}"]`
		);
		console.log(targetCell);
		this.changeTurn();
	}
}
