import Player from "./Player";

export default class BoardController {
    /**
     * 
     * @param {Player} player
     * @param {Element} boardView 
     */

    constructor(player, boardView) {
        this.player = player
        this.boardView = boardView
    }

    showBoardShips() {
        const currentBoard = this.player.playerBoard.board

        for (let y = 0; y < currentBoard.length; y++) {
            for (let x = 0; x < currentBoard.length; x++) {
                if (currentBoard[y][x]) {
                    const targetCell = this.boardView.querySelector(
                        `[data-x='${x}'][data-y='${y}']`
                    );
                    targetCell.classList.add("occupied-cell");
                }
            }
        }
    }

    enableBoard() {
        this.boardView.classList.remove('disable-pointer-events')
    }

    disableBoard() {
        this.boardView.classList.add('disable-pointer-events')
    }
}