import { createBoards } from "./Game/Board.js";
import { startMenu } from "./Game/Modal.js";
import BoardController from "./Main/Classes/BoardController.js";
import Game from "./Main/Classes/GameController.js";
import "./index.css";


const root = document.getElementById("root");

window.onload = () => {
	startMenu()
	root.appendChild(createBoards())

}
