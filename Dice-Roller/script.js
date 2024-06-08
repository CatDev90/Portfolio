//Dice Roller Program

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice${value}.png" alt="Dice ${value}">`);
    }

}   

diceResult.innerHTML = values.join(", ");
diceImages.innerHTML = images.join(" ");

// Path: Dice-Roller/script.js

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice${value}.png" alt="Dice ${value}">`);
    }

    diceResult.innerHTML = values.join(", ");
    diceImages.innerHTML = images.join(" ");

}
//Dice Roller Program

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice${value}.png" alt="Dice ${value}">`);
    }

}   

diceResult.innerHTML = values.join(", ");
diceImages.innerHTML = images.join(" ");

// Path: Dice-Roller/script.js

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice${value}.png" alt="Dice ${value}">`);
    }

    diceResult.innerHTML = values.join(", ");
    diceImages.innerHTML = images.join(" ");

}