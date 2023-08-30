import Gameboard from "./Main/Classes/Gameboard.js";
import { startMenu } from "./Game/PlaceShips.js";
import "./index.css";

// const gameboard = new Gameboard()
// console.table(gameboard.board)
// gameboard
const root = document.getElementById("root");
window.onload = () => {
	startMenu()
};
