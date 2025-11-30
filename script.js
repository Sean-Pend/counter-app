// Select elements from the DOM
const counterValue = document.getElementById("counter-value");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

// Initialize counter
let count = 0;

// Add event listeners to buttons
//Increase button
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

//decrease button
decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

//reset button
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Function to update displayed number
function updateDisplay() {
  counterValue.textContent = count;
}

// change text color based on counter value
function updateDisplay() {
    counterValue.textContent = count;
  
    if (count > 0) counterValue.style.color = "green";
    else if (count < 0) counterValue.style.color = "red";
    else counterValue.style.color = "black";
  }
  
// use arrow keys to change counter and r to reset to 0
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") count++;
    else if (e.key === "ArrowDown") count--;
    else if (e.key.toLowerCase() === "r") count = 0;
    updateDisplay();
  });


// Keep the counter amount after refresh / in local storage
  function updateDisplay() {
    counterValue.textContent = count;
    localStorage.setItem("count", count);
  }
  
  // Load saved count on startup
  count = parseInt(localStorage.getItem("count")) || 0;
  updateDisplay();
  
  