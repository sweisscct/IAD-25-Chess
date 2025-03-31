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
        cell.className = "cell " + ((row + col) % 2 === 0 ? "white" : "black");
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


