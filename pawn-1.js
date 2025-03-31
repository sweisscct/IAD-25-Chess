class Pawn {
    constructor(color, position) {
      this.color = color; // 'white' or 'black'
      this.position = position; // { row: Number, col: Number }
      this.hasMoved = false;
    }
  
    getValidMoves(board) {
      const moves = [];
      const { row, col } = this.position;
      const direction = this.color === 'white' ? -1 : 1;
      const startRow = this.color === 'white' ? 6 : 1;
  
      // Move one square forward
      if (this.isEmpty(board, row + direction, col)) {
        moves.push({ row: row + direction, col });
  
        // Move two squares forward if it's the first move
        if (!this.hasMoved && this.isEmpty(board, row + 2 * direction, col)) {
          moves.push({ row: row + 2 * direction, col });
        }
      }
  
      // Capture diagonally
      for (let offset of [-1, 1]) {
        const targetCol = col + offset;
        const targetRow = row + direction;
  
        if (
          this.inBounds(targetRow, targetCol) &&
          this.isEnemy(board, targetRow, targetCol)
        ) {
          moves.push({ row: targetRow, col: targetCol });
        }
      }
  
      return moves;
    }
  
    isEmpty(board, row, col) {
      return this.inBounds(row, col) && board[row][col] === null;
    }
  
    isEnemy(board, row, col) {
      const piece = board[row][col];
      return piece && piece.color !== this.color;
    }
  
    inBounds(row, col) {
      return row >= 0 && row < 8 && col >= 0 && col < 8;
    }
  }
  
  module.exports = Pawn;
  