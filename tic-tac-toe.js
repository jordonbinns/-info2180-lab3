
document.addEventListener("DOMContentLoaded", () => {
    // Initialize game state (array to track the board)
    const boardState = Array(9).fill(null); // A 3x3 grid (9 squares)

    // Track the current player (true = 'X', false = 'O')
    let isXTurn = true;

    // Get all divs inside the board and the status div
    const squares = document.querySelectorAll("#board > div");
    const statusDiv = document.getElementById("status");

    // Define winning combinations
    const winningCombinations = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonal 1
        [2, 4, 6]  // diagonal 2
    ];

    // Function to check for a winner
    const checkWinner = () => {
        // Check each winning combination
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                // If a win is found, return the winner ("X" or "O")
                return boardState[a];
            }
        }
        return null;
    };

    // Function to handle a square click
    const handleSquareClick = (index) => {
        // Don't allow clicks on already filled squares
        if (boardState[index]) return;

        // Determine the symbol for the current player
        const currentPlayer = isXTurn ? 'X' : 'O';

        // Update the game state
        boardState[index] = currentPlayer;

        // Update the square's content and class
        squares[index].textContent = currentPlayer; // Display X or O in the square
        squares[index].classList.add(currentPlayer); // Add appropriate class for styling

        // Check for a winner
        const winner = checkWinner();
        if (winner) {
            // If there's a winner, update the status message
            statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
            statusDiv.classList.add("you-won"); // Add the you-won class
            return; // Stop the game once there's a winner
        }

        // Switch turn to the other player
        isXTurn = !isXTurn;
    };

    // Add click event listeners to all squares
    squares.forEach((square, index) => {
        square.classList.add("square"); // Ensure the square has the correct class
        square.addEventListener("click", () => handleSquareClick(index));

        // Add hover effect on mouseover
        square.addEventListener("mouseover", () => {
            if (!boardState[index]) {
                square.classList.add("hover");
            }
        });

        // Remove hover effect on mouseout
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });
});
