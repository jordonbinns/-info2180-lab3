document.addEventListener("DOMContentLoaded", () => {
    // Get all divs inside the board
    const squares = document.querySelectorAll("#board > div");

    // Loop through each div and add the 'square' class
    squares.forEach(square => {
        square.classList.add("square");
    });

    // Initialize game state (array to track the board)
    const boardState = Array(9).fill(null); // A 3x3 grid (9 squares)

    // Track the current player (true = 'X', false = 'O')
    let isXTurn = true;

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

        // Switch turn to the other player
        isXTurn = !isXTurn;
    };

    // Add click event listeners to all squares
    squares.forEach((square, index) => {
        square.addEventListener("click", () => handleSquareClick(index));
    });
    
});
