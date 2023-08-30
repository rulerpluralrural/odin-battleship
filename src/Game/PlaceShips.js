import Ship from "../Main/Classes/Ship.js";

function startMenu() {
	const ships = [
		new Ship(5, "Carrier"),
		new Ship(4, "Battleship"),
		new Ship(3, "Destroyer"),
		new Ship(3, "Submarine"),
		new Ship(2, "Patrol Boat"),
	];

	const currentShip = ships[0];

	const root = document.querySelector("#root");
	const startGameModal = document.createElement("div");
	startGameModal.className = "overlay";
	startGameModal.id = "overlay";
	let isVertical = false;

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
		square.addEventListener("mouseover", function () {
			activeSquare.call(this, isVertical, introBoard, currentShip);
		});
        square.addEventListener('mouseout', function() {
            removeActiveSquare.call(this, isVertical, introBoard, currentShip)
        })
		introBoard.insertAdjacentElement("beforeend", square);
	}

	return root.appendChild(startGameModal);
}

function activeSquare(isVertical, introBoard, currentShip) {
	// console.log(introBoard)
	const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (isVertical) {
		for (let i = 0; i < currentShip.length; i++) {
			if (y + i < 10) {
				const targetCell = introBoard.children[y * 10 + i * 10 + x];
                console.log(targetCell);
                targetCell.classList.add('current-cell')
				
			}
		}
	} else {
		for (let i = 0; i < currentShip.length; i++) {
			if (x + i < 10) {
				const targetCell = introBoard.children[y * 10 + x + i];
                console.log(targetCell);
                targetCell.classList.add('current-cell')
				
			}
		}
	}
}

function removeActiveSquare(isVertical, introBoard, currentShip) {
    const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (isVertical) {
		for (let i = 0; i < currentShip.length; i++) {
			if (y + i < 10) {
				const targetCell = introBoard.children[y * 10 + i * 10 + x];
                console.log(targetCell);
                targetCell.classList.remove('current-cell')
				
			}
		}
	} else {
		for (let i = 0; i < currentShip.length; i++) {
			if (x + i < 10) {
				const targetCell = introBoard.children[y * 10 + x + i];
                console.log(targetCell);
                targetCell.classList.remove('current-cell')
				
			}
		}
	}
}

function setShips() {
	const currentShip = 0;
	const setShip = 0;

	const shipNameText = document.querySelector("#modal-header");
	const randomButton = document.querySelector("#random-btn");
	const changeOrientationButton = document.querySelector(
		"#change-orientation-btn"
	);
	const resetButton = document.querySelector("#reset-btn");
}

export { startMenu };
