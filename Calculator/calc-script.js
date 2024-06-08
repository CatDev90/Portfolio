// Get the display element
var display = document.getElementById('display');

// Function to append to the display
function appendToDisplay(value){
    display.value += value;
}

// Function to clear the display
function clearDisplay(){
    display.value = "";
}

// Function to calculate the result
function calculate(){
    try {
        display.value = eval(display.value);
    } catch(e) {
        display.value = "Error";
    }
}
// Get the display element
var display = document.getElementById('display');

// Function to append to the display
function appendToDisplay(value){
    display.value += value;
}

// Function to clear the display
function clearDisplay(){
    display.value = "";
}

// Function to calculate the result
function calculate(){
    try {
        display.value = eval(display.value);
    } catch(e) {
        display.value = "Error";
    }
}