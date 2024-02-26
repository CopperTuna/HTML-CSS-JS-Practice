const display = document.getElementById("display");

function appendToDisplay(input) {
        display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

const inputs= document.getElementById("input");
const comment = document.getElementsByClassName("comment")[0];
let randomNumber;
let attempt = 0;
const max = 100;
const min = 1;

function appendToInput(input) {
    inputs.value += input;
}

function enterNumber() {
    randomNumber = Math.floor(Math.random()* (max - min + 1)) + min;
    const inputValue = Number(inputs.value);

    if (inputValue < randomNumber) {
        comment.textContent = `Higher than ${inputValue}`;
        attempt += 1;
    }
    else if (inputValue > randomNumber) {
        comment.textContent = `Lower than ${inputValue}`;
        attempt += 1;
    }
    else {
        comment.textContent = `Congratulations, You guess it at ${attempt} number of attempt!!`;
    }
}

function clearInput() {
    inputs.value = "";
}

function clicker() {
    document.getElementById('text').textContent = "Copper" + " " + "Tuna";
}