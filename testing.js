const Pawn = require('./pawn-1.js');

// Create an empty 8x8 board
const board = Array.from({ length: 8 }, () => Array(8).fill(null));

// Test 1: White pawn at starting position
const pawn = new Pawn('white', { row: 6, col: 4 });
board[6][4] = pawn;

console.log("Test 1 - White pawn at initial position:");
console.log(pawn.getValidMoves(board));
// Expected: [{ row: 5, col: 4 }, { row: 4, col: 4 }]

// Test 2: White pawn with enemy piece diagonally
const board2 = Array.from({ length: 8 }, () => Array(8).fill(null));
const pawn2 = new Pawn('white', { row: 6, col: 4 });
board2[6][4] = pawn2;
board2[5][3] = { type: 'rook', color: 'black' }; // enemy piece

console.log("Test 2 - White pawn with enemy on diagonal left:");
console.log(pawn2.getValidMoves(board2));
// Expected: [{ row: 5, col: 4 }, { row: 4, col: 4 }, { row: 5, col: 3 }]
