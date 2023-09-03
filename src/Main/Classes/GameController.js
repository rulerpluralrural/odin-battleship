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
	/**@type {BoardController} */
	static controller1 ;
	 /**@type {BoardController} */
	static controller2;
	/**@type {BoardController} */
	static current;

	static setUpGame(controller1, controller2) {
		this.controller1 = controller1;
		this.controller2 = controller2;
		this.current = controller1;

		this.AI.placeRandomShips();
		controller1.showBoardShips();
		controller1.disableBoard();
	}

	static changeTurn() {
		const prev = this.current;
		const current =
			this.current === this.controller1 ? this.controller2 : this.controller1;

		if (current.player.name === "AI") {
			prev.disableBoard();
		} else {
			prev.enableBoard();
		}

		this.current = current;
		current.disableBoard();
		prev.enableBoard();

		if (current.player.name === "AI") {
			this.handleAIAttack();
		}
	}

	static handleAIAttack() {
		const current = this.current;
		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const targetBoard = target.player.playerBoard
		const aiAttackResult = current.player.randomAttack(targetBoard);
		const targetX = aiAttackResult.x
		const targetY = aiAttackResult.y
		this.attack(targetX, targetY, target.boardView, aiAttackResult.result)
		
		if (
			aiAttackResult.result === "Hit" ||
			aiAttackResult.result === "Already Attacked" ||
			aiAttackResult.result === "Sunked"
		) {
			this.handleAIAttack()
		}
		
	}

	static attack(x, y, targetBoard, result) {
		if (this.isGameOver) return;

		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const targetCell = targetBoard.querySelector(
			`[data-x="${x}"][data-y="${y}"]`
		)
		let attackResult;
		
		if (result) {
			attackResult = result
		} else {
			attackResult = target.player.playerBoard.receiveAttack(y, x)
		}

		if (attackResult === "Already Attacked") return;

		if (attackResult === "Missed") {
			targetCell.classList.add("missed");
			targetCell.textContent = "~";
			this.changeTurn();
		} else if (attackResult === "Hit" || "Sunked") {
			targetCell.classList.add("invalid-cell");
			targetCell.textContent = "+";
		}

		if (target.player.checkAllShips()) {
			this.gameIsOver()
		}

		targetCell.classList.add('disable-pointer-events')	
	}

	static gameIsOver() {
		this.isGameOver = true;
		console.log("game over");
	}
}
