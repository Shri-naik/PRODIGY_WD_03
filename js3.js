let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

let msg;
let cells;
let resetButton;

document.addEventListener('DOMContentLoaded', () => {
    cells = document.querySelectorAll('.a');
    resetButton = document.getElementById('res');
    msg = document.getElementById("message");

    function handleCellClick(cell, index) {
        if (gameOver) return;
        if (gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkForWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(cell, index));
    });

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameOver = false;
        cells.forEach(cell => cell.textContent = '');
        msg.textContent = '';
    }

    resetButton.addEventListener('click', resetGame);
});

function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const winner = winConditions.find(([a, b, c]) => 
        gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]
    );

    if (winner) {
        gameOver = true;
        msg.textContent = `Player- ${gameBoard[winner[0]]} wins!`;
    }
    
}