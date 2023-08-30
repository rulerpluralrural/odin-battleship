import Gameboard from "../Classes/Gameboard.js";
import Ship from "../Classes/Ship.js";
import Player from "../Classes/Player.js";

describe("Player", () => {
	let player;
	let playerGameBoard;
    let enemy;
    let enemyBoard;
	let ship;

	beforeEach(() => {
		player = new Player("Bro");
        enemy = new Player("AI")
		playerGameBoard = new Gameboard();
        enemyBoard = new Gameboard();
        ship = new Ship(4);
	});

    it('check player initialization', () => {
        expect(player).toEqual({
            name: 'Bro',
            playerBoard: playerGameBoard,
            ships: []
        })
    })

    it('test player attack', () => {
        enemyBoard.placeShip(ship, 1, 1, true)
        expect(enemy.attack(1, 1, enemyBoard)).toBe('Hit')
        expect(enemy.attack(2, 1, enemyBoard)).toBe('Hit')
        expect(enemy.attack(3, 1, enemyBoard)).toBe('Hit')
        expect(enemy.attack(4, 1, enemyBoard)).toBe('Sunked')
        expect(enemy.attack(1, 0, enemyBoard)).toBe('Missed')
        console.table(enemyBoard.board)
    })

});
