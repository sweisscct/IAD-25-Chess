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