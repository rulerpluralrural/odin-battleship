import BoardController from "./BoardController";
import Player, { AI } from "./Player";
import Ship from "./Ship";
import { overlay, winnerText } from "../../Game/EndGameModal";

export default class Game {
	static user = new Player("Player", [
		new Ship(5, "Carrier"),
		new Ship(4, "Battleship"),
		new Ship(3, "Destroyer"),
		new Ship(3, "Submarine"),
		new Ship(2, "Patrol Boat"),
	]);

	static ai = new AI("AI", [
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
	static turnDisplay;

	static setUpGame(controller1, controller2, turnDisplay) {
		this.controller1 = controller1;
		this.controller2 = controller2;
		this.current = controller1;
		this.turnDisplay = turnDisplay

		controller1.showBoardShips();
		controller1.disableBoard();
	}

	static changeTurn() {
		const other = this.current;
		const current =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		
		if (current.player.name === "AI") {
			other.disableBoard();
		} else {
			other.enableBoard()
		}

		this.current = current;
		current.disableBoard();

		if (current.player.name === "AI") {
			this.turnDisplay.textContent = 'It\'s the enemy\'s turn!'
			setTimeout(() => {
				this.handleAIAttack()
			}, 500);
		} else {
			this.turnDisplay.textContent = 'It\'s your turn!'
		}
			
	}

	static handleAIAttack() {
		const current = this.current;
		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const targetBoard = target.player.playerBoard
		const aiAttackResult = /** @type { AI }*/ (current.player).smartRandomAttack(targetBoard);
		const targetX = aiAttackResult.x
		const targetY = aiAttackResult.y
		this.attack(targetY, targetX, target.boardView, aiAttackResult.result)		

		// console.log(aiAttackResult.result)
		// console.table(target.player.playerBoard.board)
		
		if (
			aiAttackResult.result === "Hit" ||
			aiAttackResult.result === "Already Attacked" ||
			aiAttackResult.result === "Sunked"
		) {
			this.handleAIAttack()
		}
	}

	static attack(x, y, targetBoardView, result) {
		if (this.isGameOver) return;

		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const targetCell = targetBoardView.querySelector(
			`[data-x="${x}"][data-y="${y}"]`
		)
		const targetBoard = target.player.playerBoard
		let attackResult;
		
		if (result) {
			attackResult = result
		} else {
			attackResult = targetBoard.receiveAttack(y, x)
		}

		if (attackResult === "Already Attacked") return;

		if (attackResult === "Missed") {
			targetCell.classList.add("missed");
			targetCell.textContent = "·";
			this.changeTurn();
		} else {
			targetCell.classList.add("invalid-cell");
			targetCell.textContent = "x";
		}

		if (target.player.checkAllShips()) {
			this.gameIsOver()
		}

		targetCell.classList.add('disable-pointer-events')	
	}

	static gameIsOver() {
		this.isGameOver = true;
		overlay.classList.remove('hide-modal')
		winnerText.innerHTML =`
		Game Winner: 
		<span>${this.current.player.name}</span>
		`;
	}

	static restartGame() {
		this.isGameOver = true
		overlay.classList.add('hide-modal')
		window.location.reload()
	}
}
