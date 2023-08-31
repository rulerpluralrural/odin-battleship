import Ship from "../Main/Classes/Ship.js";
import Player from "../Main/Classes/Player.js";
import Gameboard from "../Main/Classes/Gameboard.js";

let shipIndex = 0

function startMenu() {
	const player = new Player('Player One')
	player.ships = [
		new Ship(5, "Carrier"),
		new Ship(4, "Battleship"),
		new Ship(3, "Destroyer"),
		new Ship(3, "Submarine"),
		new Ship(2, "Patrol Boat"),
	];

	const root = document.querySelector("#root");
	const startGameModal = document.createElement("div");
	startGameModal.className = "overlay";
	startGameModal.id = "overlay";
	let isVertical = true;

	startGameModal.innerHTML += `
        <div class="modal">
            <div class="modal-header-container">
                <h1>Play Battleship!</h1>
                <h2>Place Your <span id="modal-header">Ship</span></h2>
                <div class="modal-btn-container">
                    <button class="random-btn" id="random-btn">Random</button>
                    <button class="change-orientation-btn" id="change-orientation-btn">Rotate</button>
                    <button class="reset-btn" id="reset-btn">Reset</button>
                </div>
            </div>
            <div class="place-ship-board" id="place-ship-board">
            </div>
        </div>
`;

	const changeOrientationButton = startGameModal.querySelector(
		"#change-orientation-btn"
	);

	changeOrientationButton.addEventListener("click", () => {
		isVertical = !isVertical;
	});

	for (let i = 0; i < 10 * 10; i++) {
		const square = document.createElement("div");
		square.className = "square";
		square.setAttribute("data-x", `${i % 10}`);
		square.setAttribute("data-y", `${Math.floor(i / 10)}`);
		const introBoard = startGameModal.querySelector("#place-ship-board");
		introBoard.insertAdjacentElement("beforeend", square);

		square.addEventListener("mouseover", function () {
			if (shipIndex > player.ships.length -1) return
			activeSquare.call(this, isVertical, introBoard,  player.ships[shipIndex], function(targetCell) {
				targetCell.classList.add('active-cell')
			});
		});
        square.addEventListener('mouseout', function() {
			if (shipIndex > player.ships.length -1) return
            activeSquare.call(this, isVertical, introBoard,  player.ships[shipIndex], function(targetCell) {
				targetCell.classList.remove('active-cell')
			})
        })
		square.addEventListener('click', function() {
			if (shipIndex > player.ships.length -1) return
            setUpGameboard.call(this, isVertical, introBoard,  player.ships[shipIndex], player)
        })
	}

	return root.appendChild(startGameModal);
}

function activeSquare(isVertical, introBoard, currentShip, cellCallback) {
	const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (isVertical) {
		for (let i = 0; i < currentShip.length; i++) {
			if (y + i < 10) {
				const index = y * 10 + x
				const targetCell = introBoard.children[index + i * 10];
				cellCallback(targetCell)
			}
		}
	} else {
		for (let i = 0; i < currentShip.length; i++) {
			if (x + i < 10) {
				const targetCell = introBoard.children[y * 10 + x + i];
				cellCallback(targetCell)
			}
		}
	}
}

function setUpGameboard( isVertical, introBoard, currentShip, player) {
	const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (player.playerBoard.placeShip(currentShip, y, x, isVertical)) {
		shipIndex += 1
		console.log(shipIndex)
		console.table(player.playerBoard.board)
	}
}

export { startMenu };
