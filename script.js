
// ### FUNCTION CHECK AND CHECKMATE
// Function to check if the king is in check or checkmate. TEAM ALL+ALEX
function checkGameStatus() {
    if (game.in_checkmate()) {
        console.log(`Checkmate! ${game.turn() === 'w' ? 'Black' : 'White'} wins!`);
        alert(`Checkmate! ${game.turn() === 'w' ? 'Black' : 'White'} wins!`);
    } else if (game.in_check()) {
        console.log(`${game.turn() === 'w' ? 'White' : 'Black'} is in check!`);
        alert(`${game.turn() === 'w' ? 'White' : 'Black'} is in check!`);
    } else if (game.in_draw()) {
        console.log("It's a draw!");
        alert("It's a draw!");
    }
}

// Function to make a move and check for check/checkmate
function makeMove(from, to) {
    const move = game.move({ from, to, promotion: "q" }); // Promote to queen if needed
    if (move === null) {
        console.log("Invalid move!");
        return false; // Invalid move
    }

    checkGameStatus(); // Check for check/checkmate after each move
    return true;
}
// ### END OF THE FUNCTION


    const boardSize = 8; // 8x8 board
    let rookPosition = { row: 3, col: 3 }; 

    function createBoard() {
        const board = document.getElementById("chessboard");
        board.innerHTML = ''; 
        
        for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col < boardSize; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");

                if (row === rookPosition.row && col === rookPosition.col) {
                    cell.classList.add("rook");
                    cell.innerText = 'R';
                }
                
                
                cell.addEventListener("click", () => handleCellClick(row, col));
                
                board.appendChild(cell);
            }
        }
    }

    function highlightRookMoves() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.classList.remove('highlight');
        });

        
        for (let col = 0; col < boardSize; col++) {
            if (col !== rookPosition.col) {
                getCell(rookPosition.row, col).classList.add('highlight');
            }
        }

        
        for (let row = 0; row < boardSize; row++) {
            if (row !== rookPosition.row) {
                getCell(row, rookPosition.col).classList.add('highlight');
            }
        }
    }

    function getCell(row, col) {
        return document.querySelectorAll('.cell')[row * boardSize + col];
    }

    function handleCellClick(row, col) {
        
        if (row === rookPosition.row || col === rookPosition.col) {
            
            rookPosition = { row, col };
            createBoard(); 
            highlightRookMoves(); 
        }
    }

    
    createBoard();
    highlightRookMoves();

