import Gameboard from "./Main/Classes/Gameboard.js";
import { startMenu } from "./Game/Modal.js";
import "./index.css";

// const gameboard = new Gameboard()
// console.table(gameboard.board)
// gameboard
const root = document.getElementById("root");
window.onload = () => {
	startMenu()
};
