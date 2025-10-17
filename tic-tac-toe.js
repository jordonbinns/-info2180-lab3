document.addEventListener("DOMContentLoaded", () => {
    // Get all divs inside the board
    const squares = document.querySelectorAll("#board > div");

    // Loop through each div and add the 'square' class
    squares.forEach(square => {
        square.classList.add("square");
    });
});
