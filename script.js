
let count = 0;

const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase-btn");
const resetButton = document.getElementById("reset-btn");

// Increase the count when clicked
increaseButton.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
});

// Reset the count to zero
resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});
