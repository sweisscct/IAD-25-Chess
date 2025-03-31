

function getPawnMoves(board, x, y) {
    const moves = [];
    const direction = -1; 
  
    const nextY = y + direction;
  
    
    if (isInsideBoard(x, nextY) && isEmpty(board, x, nextY)) {
      moves.push({
        from: { x, y },
        to: { x, y: nextY },
        type: "move",
        piece: "pawn"
      });
  
      
      const startRow = 6;
      const twoAheadY = y + direction * 2;
      if (y === startRow && isEmpty(board, x, twoAheadY)) {
        moves.push({
          from: { x, y },
          to: { x, y: twoAheadY },
          type: "move",
          piece: "pawn"
        });
      }
    }
  
    
    for (let dx of [-1, 1]) {
      const newX = x + dx;
      const newY = y + direction;
  
      if (isInsideBoard(newX, newY) && isEnemy(board, newX, newY)) {
        moves.push({
          from: { x, y },
          to: { x: newX, y: newY },
          type: "capture",
          piece: "pawn"
        });
      }
    }
  
    return moves;
  }
  
  
  function isInsideBoard(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }
  
  function isEmpty(board, x, y) {
    return isInsideBoard(x, y) && board[y][x] === null;
  }
  
  function isEnemy(board, x, y) {
    const piece = board[y][x];
    return piece !== null; 
  }
  
