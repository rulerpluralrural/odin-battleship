import Game from "../Main/Classes/GameController.js";
import BoardController from "../Main/Classes/BoardController.js";

function startMenu() {
	const root = document.querySelector("#root");
	const startGameModal = document.createElement("div");
	startGameModal.className = "overlay";
	startGameModal.id = "overlay";

	startGameModal.innerHTML += `
        <div class="modal">
            <div class="modal-header-container">
                <h1>Play Battleship!</h1>
                <h2 id="modal-header">Place Your <span>Carrier!</span></h2>
                <div class="modal-btn-container">
                    <button class="random-btn" id="random-btn">Random</button>
                    <button class="change-orientation-btn" id="change-orientation-btn">Rotate</button>
                    <button class="reset-btn" id="reset-btn">Reset</button>
                </div>
            </div>
            <div class="place-ship-board" id="place-ship-board">
            </div>
			<button class="play-btn" id="play-btn">Play!</button>
        </div>
`;

	const introBoard = startGameModal.querySelector("#place-ship-board");
	const changeOrientationButton = startGameModal.querySelector(
		"#change-orientation-btn"
	);
	const resetButton = startGameModal.querySelector("#reset-btn");
	const randomShipsButton = startGameModal.querySelector("#random-btn");
	const playGameButton = startGameModal.querySelector("#play-btn");

	changeOrientationButton.addEventListener("click", () => {
		Game.isVertical = !Game.isVertical;
	});

	resetButton.addEventListener("click", resetBoard);

	randomShipsButton.addEventListener("click", () => {
		placeRandomShips(introBoard);
	});

	playGameButton.addEventListener("click", startGame);

	for (let i = 0; i < 10 * 10; i++) {
		const square = document.createElement("div");
		square.className = "square";
		square.setAttribute("data-x", `${i % 10}`);
		square.setAttribute("data-y", `${Math.floor(i / 10)}`);
		introBoard.insertAdjacentElement("beforeend", square);

		square.addEventListener("mouseover", function () {
			if (Game.shipIndex > Game.user.ships.length - 1) return;
			activeSquare.call(this, introBoard, function (targetCell) {
				if (targetCell.classList.contains("occupied-cell")) {
					targetCell.classList.add("invalid-cell");
				} else {
					targetCell.classList.add("active-cell");
				}
			});
		});
		square.addEventListener("mouseout", function () {
			if (Game.shipIndex > Game.user.ships.length - 1) return;
			activeSquare.call(this, introBoard, function (targetCell) {
				if (targetCell.classList.contains("active-cell")) {
					targetCell.classList.remove("active-cell");
				}
				if (targetCell.classList.contains("invalid-cell")) {
					targetCell.classList.remove("invalid-cell");
				}
			});
		});
		square.addEventListener("click", function () {
			if (Game.shipIndex > Game.user.ships.length - 1) return;
			setUpShips.call(this, introBoard);
		});
	}

	return root.appendChild(startGameModal);
}

function changeShipName() {
	const shipName = document.querySelector("#modal-header");

	if (Game.shipIndex < Game.user.ships.length) {
		shipName.innerHTML = `Place Your <span>${
			Game.user.ships[Game.shipIndex].name
		}!</span>`;
	} else {
		shipName.textContent = `Start the Game!`;
	}
}

function activeSquare(introBoard, cellCallback) {
	const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (Game.isVertical) {
		for (let i = 0; i < Game.user.ships[Game.shipIndex].length; i++) {
			if (y + i < 10) {
				const index = y * 10 + x;
				const targetCell = introBoard.children[index + i * 10];
				cellCallback(targetCell);
			}
		}
	} else {
		for (let i = 0; i < Game.user.ships[Game.shipIndex].length; i++) {
			if (x + i < 10) {
				const targetCell = introBoard.children[y * 10 + x + i];
				cellCallback(targetCell);
			}
		}
	}
}

function setUpShips(introBoard) {
	const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (
		Game.user.playerBoard.placeShip(
			Game.user.ships[Game.shipIndex],
			y,
			x,
			Game.isVertical
		)
	) {
		if (Game.isVertical) {
			for (let i = 0; i < Game.user.ships[Game.shipIndex].length; i++) {
				if (y + i < 10) {
					const index = y * 10 + x;
					const targetCell = introBoard.children[index + i * 10];
					targetCell.classList.add("occupied-cell");
				}
			}
		} else {
			for (let i = 0; i < Game.user.ships[Game.shipIndex].length; i++) {
				if (x + i < 10) {
					const targetCell = introBoard.children[y * 10 + x + i];
					targetCell.classList.add("occupied-cell");
				}
			}
		}
		activeSquare.call(this, introBoard, function (targetCell) {
			targetCell.classList.remove("active-cell");
		});
		Game.shipIndex += 1;
		changeShipName();
	}
}

function resetBoard() {
	const squares = document.querySelectorAll("#place-ship-board div");
	Game.user.playerBoard.init();
	Game.shipIndex = 0;
	changeShipName();

	squares.forEach((square) => {
		square.classList.remove("occupied-cell");
	});
	// console.table(squares)
	// console.table(Game.player.playerBoard.board)
}

function placeRandomShips(introBoard) {
	const playerBoard = Game.user.playerBoard.board;
	resetBoard();
	Game.user.placeRandomShips();
	Game.shipIndex = Game.user.ships.length;
	changeShipName();

	for (let y = 0; y < playerBoard.length; y++) {
		for (let x = 0; x < playerBoard.length; x++) {
			if (playerBoard[y][x]) {
				const targetCell = introBoard.querySelector(
					`[data-x='${x}'][data-y='${y}']`
				);
				targetCell.classList.add("occupied-cell");
			}
		}
	}
	// console.table(Game.player.playerBoard.board);
}

function startGame() {
	const modal = document.querySelector("#overlay");
	const turnDisplay = document.querySelector('#display-turn')

	if (Game.shipIndex < Game.user.ships.length) return;

	modal.classList.add("hide-modal");
	
	const playerBoard = document.querySelector('#player-board')
	const enemyBoard = document.querySelector('#enemy-board')
	
	const playerOne = new BoardController(Game.user, playerBoard)
	const playerTwo = new BoardController(Game.AI, enemyBoard)

	Game.setUpGame(
		playerOne,
		playerTwo,
		turnDisplay
	)

	// console.table(playerOne.player.playerBoard.board);
	// console.table(playerTwo.player.playerBoard.board)
}

export { startMenu };
