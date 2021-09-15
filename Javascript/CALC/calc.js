const userInput = document.getElementById('userInput');

let display = '';

function press(number) {
    display += number;
    userInput.value = display;
}

function equal() {
    userInput.value = eval(display);
    display = '';
    // display.value = eval(display);
}

function erase() {
    display = '';
    userInput.value = display;
}