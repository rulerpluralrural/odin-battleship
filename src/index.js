import { createBoards } from "./Game/Board.js";
import { startMenu } from "./Game/Modal.js";
import BoardController from "./Main/Classes/BoardController.js";
import Game from "./Main/Classes/GameController.js";
import "./index.css";


const root = document.getElementById("root");

window.onload = () => {
	startMenu()
	root.appendChild(createBoards())

	const playerBoard = document.querySelector('#player-board')
	const enemyBoard = document.querySelector('#enemy-board')

	const player1 = Game.player
	const player2 = Game.AI

	Game.startGame(
		new BoardController(player1, playerBoard),
			new BoardController(player2, enemyBoard)
	)
	
	console.log(playerBoard)
	console.log(enemyBoard)
};
