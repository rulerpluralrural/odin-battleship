import Player from "./Player";
import Ship from "./Ship";


export default class Game {
    static player =  new Player('Player', [
		new Ship(5, "Carrier"),
		new Ship(4, "Battleship"),
		new Ship(3, "Destroyer"),
		new Ship(3, "Submarine"),
		new Ship(2, "Patrol Boat")
	]);
    static shipIndex = 0
    static isVertical = true
}