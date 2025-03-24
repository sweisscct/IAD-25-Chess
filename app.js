class Pawn {
    constructor(color, hasMoved = false) {
        this.color = color; // 'white' or 'black'
        this.hasMoved = hasMoved;
    }

    getValidMoves(position) {
        let [file, rank] = [position[0], parseInt(position[1])];
        let moves = [];

        // Determine direction based on color
        let direction = this.color === 'white' ? 1 : -1;
        let startRank = this.color === 'white' ? 2 : 7;

        // Move forward one square
        let forwardMove = file + (rank + direction);
        moves.push(forwardMove);

        // Move forward two squares if first move
        if (!this.hasMoved) {
            let doubleMove = file + (rank + 2 * direction);
            moves.push(doubleMove);
        }

        // Capture diagonally
        let captureMoves = [
            String.fromCharCode(file.charCodeAt(0) - 1) + (rank + direction),
            String.fromCharCode(file.charCodeAt(0) + 1) + (rank + direction)
        ];

        return moves.concat(captureMoves);
    }

    move(newPosition) {
        this.hasMoved = true; // After first move, restrict two-square move
    }
}


