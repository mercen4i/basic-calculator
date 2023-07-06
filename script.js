function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator === "+") return add(parseInt(num1), parseInt(num2));
    else if (operator === "-") return subtract(parseInt(num1), parseInt(num2));
    else if (operator === "*") return multiply(parseInt(num1), parseInt(num2));
    else if (operator === "/") return divide(parseInt(num1), parseInt(num2));
}

function inputNumOne(e) {
    numberDisplay.textContent += e.target['id'];
    num1 += e.target['id'];
    enableOperatorInput();
    e.preventDefault();
}

function enableNumOneInput() {
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', inputNumOne);
    });
}

function disableNumOneInput() {
    numberButtons.forEach(numberButton => {
        numberButton.removeEventListener('click', inputNumOne);
    });
}

function inputNumTwo(e) {
    if(numberIsClicked == false) {
        numberDisplay.textContent = "";
        numberIsClicked = true;
    } 
    if(numberIsClicked == true) {
        numberDisplay.textContent += e.target['id'];
        num2 += e.target['id'];
    }
    if(equalsIsClicked == false) {
        enableEqualsButton();
        equalsIsClicked = true;
    }
}

function enableNumTwoInput() {
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', inputNumTwo);
    });
}

function enableOperatorInput() {
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', () => {
            if(operatorButton['id'] === "add") {
                operatorDisplay.textContent = "+";
                operator = "+";
            }
            if(operatorButton['id'] === "subtract") {
                operatorDisplay.textContent = "-";
                operator = "-";
            }
            if(operatorButton['id'] === "multiply") {
                operatorDisplay.textContent = "×";
                operator = "*";
            }
            if(operatorButton['id'] === "divide") {
                operatorDisplay.textContent = "÷";
                operator = "/";
            }
            if(operatorIsClicked == false) {
                disableNumOneInput();
                enableNumTwoInput();
                operatorIsClicked = true;
            }
        });
    });
}

function enableEqualsButton() {
    equalsButton.addEventListener('click', () => {
        result = operate(num1, num2, operator);
        numberDisplay.textContent = result;
        operatorDisplay.textContent = "=";
    });
}

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator');
const equalsButton = document.querySelector('#equals');

const numberDisplay = document.createElement('div');
numberDisplay.classList.add('number-display');
display.appendChild(numberDisplay);

const operatorDisplay = document.querySelector('#operator');

let num1 = "";
let num2 = "";
let operator = "";
let numberIsClicked = false;
let operatorIsClicked = false;
let equalsIsClicked = false;

enableNumOneInput();