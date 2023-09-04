import Game from "../Main/Classes/GameController.js";

	const overlay = document.createElement("div");
	overlay.className = "end-game-modal-overlay";
	overlay.classList.add('hide-modal')
	const modal = document.createElement("div");
	modal.className = "end-game-modal";
	const gameOverText = document.createElement("h1");
	gameOverText.textContent = "Game Over";
	const winnerText = document.createElement("h2");
	winnerText.innerHTML = `
    Game Winner: 
    <span>Player!</span>
    `;
	const restartButton = document.createElement("button");
	restartButton.className = "restart-btn";
    restartButton.textContent = 'Play Again?'


    modal.append(gameOverText)
    modal.append(winnerText)
	modal.append(restartButton)
    overlay.append(modal)

	restartButton.addEventListener('click', () => {
		Game.restartGame()
	})

	export { overlay, winnerText }

