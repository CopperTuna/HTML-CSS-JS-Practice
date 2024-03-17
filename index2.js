const display = document.querySelector("#Display");
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function operator(input) {
    try {
        if(input === "+" || input === "-" || input === "*" || input === "/") {
            display.value += input;
        }
        else {
            display.textContent = "Invalid Operator";
        }
    }
    catch (error) {
        display.textContent = error;
    }
}
function equalTo() {
    try {
        const result = eval(display.value);
        display.value = result;
    }
    catch (error) {
        display.value = "Error";
    }
}