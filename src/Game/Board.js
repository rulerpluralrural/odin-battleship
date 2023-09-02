import Game from "../Main/Classes/GameController"

function createBoards() {
    const boardSize = 10
    const container = document.createElement('div')
    container.className = 'game-container'
    const header = document.createElement('div')
    header.className = 'game-header-container'
    const gameTitle = document.createElement('h1')
    gameTitle.className = 'game-title'
    gameTitle.textContent = 'BATTLESHIPS'
    const displayTurn = document.createElement('h2')
    displayTurn.className = 'display-turn'
    displayTurn.id = 'display-turn'
    displayTurn.textContent = 'It\'s Your Turn To Attack!'
    const gameBoards = document.createElement('div')
    gameBoards.className = 'game-board-container'
    const playerBoard = document.createElement('div')
    playerBoard.className = 'player-board'
    playerBoard.id =  'player-board'
    const enemyBoard = document.createElement('div')
    enemyBoard.className = 'enemy-board'
    enemyBoard.id = 'enemy-board'

    
    for (let i = 0; i < boardSize * 10; i++) {
        const playerCells = createCell(i % 10, Math.floor(i / 10),  playerBoard)
        const enemyCells = createCell(i % 10, Math.floor(i / 10), enemyBoard)

        playerBoard.appendChild(playerCells)
        enemyBoard.appendChild(enemyCells)
    }

    header.appendChild(gameTitle)
    header.appendChild(displayTurn)
    container.appendChild(header)
    gameBoards.appendChild(playerBoard)
    gameBoards.appendChild(enemyBoard)
    container.appendChild(gameBoards)
    return container
}

function createCell(x, y, currentPlayer) {
    const cell = document.createElement('div')
    cell.className = 'square'
    cell.classList.add('hover-bg')
    cell.setAttribute("data-x", `${x}`);
    cell.setAttribute("data-y", `${y}`);

    cell.addEventListener('click', () => {
        Game.attack(x, y, currentPlayer)
    })

    return cell
}

export { createBoards }