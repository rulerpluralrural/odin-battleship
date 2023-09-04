import { createBoards } from "./Game/Board.js";
import { startMenu } from "./Game/StartMenu.js";
import {overlay} from "./Game/EndGameModal.js";
import "./index.css";


const root = document.getElementById("root");

window.onload = () => {
	startMenu()
	root.appendChild(createBoards())
	root.appendChild(overlay)
}
