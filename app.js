const board = document.getElementById("board");
const initialSetup = [
    "♜","♞","♝","♛","♚","♝","♞","♜",
    "♟","♟","♟","♟","♟","♟","♟","♟",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "♙","♙","♙","♙","♙","♙","♙","♙",
    "♖","♘","♗","♕","♔","♗","♘","♖"
];

let selected = null;

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.className = "cell " + ((row + col) % 2 === 0 ? "white" : "black") + " " + row + " " + col;
        cell.dataset.index = row * 8 + col;
        cell.textContent = initialSetup[row * 8 + col] || "";
        cell.addEventListener("click", () => {
            if (selected) {
                selected.classList.remove("selected");
                if (selected !== cell) {
                    cell.textContent = selected.textContent;
                    selected.textContent = "";
                }
                selected = null;
            } else if (cell.textContent !== "") {
                selected = cell;
                cell.classList.add("selected");
            }
        });
        board.appendChild(cell);
    }
}


const boardState = [
    ["♜","♞","♝","♛","♚","♝","♞","♜"],
    ["♟","♟","♟","♟","♟","♟","♟","♟"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["♙","♙","♙","♙","♙","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","♘","♖"]
];

function isKingInCheck(board, kingSymbol) {
    let kingPos = null;
    
    // Find king position
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (board[row][col] === kingSymbol) {
                kingPos = { row, col };
                break;
            }
        }
    }
    if (!kingPos) return false;

    // Check if any opponent piece can attack the king
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece && piece !== kingSymbol && isEnemyPiece(piece, kingSymbol)) {
                if (isValidMove(board, row, col, kingPos.row, kingPos.col, piece)) {
                    return true; // King is in check
                }
            }
        }
    }
    return false;
}

function isCheckmate(board, kingSymbol) {
    if (!isKingInCheck(board, kingSymbol)) return false;

    // Generate all legal moves for the king
    const kingPos = findKing(board, kingSymbol);
    const moves = getPossibleKingMoves(kingPos.row, kingPos.col, board);
    
    // If at least one legal move escapes check, it's not checkmate
    for (const move of moves) {
        const newBoard = simulateMove(board, kingPos.row, kingPos.col, move.row, move.col);
        if (!isKingInCheck(newBoard, kingSymbol)) {
            return false;
        }
    }
    return true; // No escape, checkmate!
}

// Additional helper functions like isValidMove, isEnemyPiece, findKing, getPossibleKingMoves, simulateMove would be needed.

// Example usage:
if (isCheckmate(boardState, "♔")) {
    console.log("White is checkmated!");
}





