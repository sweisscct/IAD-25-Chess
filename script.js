
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