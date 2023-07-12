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
    if (operator === "+") return add(parseFloat(num1), parseFloat(num2));
    else if (operator === "-") return subtract(parseFloat(num1), parseFloat(num2));
    else if (operator === "*") return multiply(parseFloat(num1), parseFloat(num2));
    else if (operator === "/") return divide(parseFloat(num1), parseFloat(num2));
}

function square(num1) {
    return num1 * num1;
}

function cube(num1) {
    return num1 * num1 * num1;
}

function inputNumOne(e) {
    if(operatorIsClicked == false && equalsIsClicked == true) {
        numberDisplay.textContent = "";
        operatorDisplay.textContent = "";
        equalsIsClicked = false;
    }
    if(e.target['id'] == "0" && numberDisplay.textContent == "0") {
        numberDisplay.textContent = "0";
    } else {
        if(numberDisplay.textContent == "0") {
            numberDisplay.textContent = "";
            num1 = "";
        }
        numberDisplay.textContent += e.target['id'];
        num1 += e.target['id'];
        enableOperatorInput();
        enableSquareButton();
        enableCubeButton();
    }
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
    operatorIsClicked = false;
    if(numberIsClicked == false) {
        numberDisplay.textContent = "";
        numberIsClicked = true;
        enableDecimalButton();
    } 
    if(numberIsClicked == true) {
        if(e.target['id'] == "0" && numberDisplay.textContent == "0") {
            numberDisplay.textContent = "0";
        } else {
            if(numberDisplay.textContent == "0") {
                numberDisplay.textContent = "";
                num2 = "";
            }
            numberDisplay.textContent += e.target['id'];
            num2 += e.target['id'];
            enableOperatorInput();
        }
    }
    if(equalsIsClicked == false) {
        enableEqualsButton();
    }
}

function enableNumTwoInput() {
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', inputNumTwo);
    });
}

function disableNumTwoInput() {
    numberButtons.forEach(numberButton => {
        numberButton.removeEventListener('click', inputNumTwo);
    })
}

function inputOperator(e) {
    let previousOperator = operator;
    if(e.target['id'] === "add") {
        operatorDisplay.textContent = "+";
        operator = "+";
    }
    if(e.target['id'] === "subtract") {
        operatorDisplay.textContent = "-";
        operator = "-";
    }
    if(e.target['id'] === "multiply") {
        operatorDisplay.textContent = "×";
        operator = "*";
    }
    if(e.target['id'] === "divide") {
        operatorDisplay.textContent = "÷";
        operator = "/";
    }
    if(operatorIsClicked == false && equalsIsClicked == true) {
        num1 = result;
        disableNumOneInput();
        enableNumTwoInput();
        operatorIsClicked = true;
        equalsIsClicked = false;
    }
    if(operatorIsClicked == false) {
        disableNumOneInput();
        enableNumTwoInput();
        enableDecimalButton();
        operatorIsClicked = true;
        equalsIsClicked = false;
    } 
    if(operatorIsClicked == true && equalsIsClicked == false && numberIsClicked == true) {
        result = operate(num1, num2, previousOperator);
        numberDisplay.textContent = result;
        num1 = result;
        num2 = "";
        operatorIsClicked = false;
        numberIsClicked = false;
        enableDecimalButton();
    }
}

function enableOperatorInput() {
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', inputOperator);
    });
}

function disableOperatorInput() {
    operatorButtons.forEach(operatorButton => {
        operatorButton.removeEventListener('click', inputOperator);
    });
}

function inputEquals() {
    if(operatorIsClicked == true) {
        num1 = "";
        operator = "";
        operatorDisplay.textContent = "=";
        operatorIsClicked = false;
        equalsIsClicked = true;
        disableNumTwoInput();
        enableNumOneInput();
    } else if(num1 != "" && num2 == "") {
        num1 = result;
        operator = "";
        numberDisplay.textContent = num1;
        operatorDisplay.textContent = "=";
    } else if(equalsIsClicked == false) {
        result = operate(num1, num2, operator);
        numberDisplay.textContent = result;
        operatorDisplay.textContent = "=";
        num1 = "";
        num2 = "";
        operator = "";
        operatorIsClicked = false;
        numberIsClicked = false;
        equalsIsClicked = true;
        disableNumTwoInput();
        enableNumOneInput();
    }
}

function enableEqualsButton() {
    equalsButton.addEventListener('click', inputEquals);
}

function disableEqualsButton() {
    equalsButton.removeEventListener('click', inputEquals);
}

function enableClearButton() {
    clearButton.addEventListener('click', () => {
        numberDisplay.textContent = "";
        operatorDisplay.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
        numberIsClicked = false;
        operatorIsClicked = false;
        equalsIsClicked = false;
        disableNumTwoInput();
        disableOperatorInput();
        disableEqualsButton();
        enableNumOneInput();
        enableDecimalButton();
    });
}

function inputDecimalButton() {
    if(numberDisplay.textContent == "") {
        numberDisplay.textContent += "0.";
        num1 += "0.";
        disableDecimalButton();
    } else if(operatorIsClicked == true && num2 == "") {
        numberDisplay.textContent = "0.";
        num2 = "0.";
        numberIsClicked = true;
        disableDecimalButton();
    } else if(numberIsClicked == true) {
        numberDisplay.textContent += "."; 
        num2 += ".";
        disableDecimalButton();   
    } else {
        numberDisplay.textContent += ".";
        num1 += ".";
        disableDecimalButton();
    }
}

function enableDecimalButton() {
    decimalButton.addEventListener('click', inputDecimalButton);
}

function disableDecimalButton() {
    decimalButton.removeEventListener('click', inputDecimalButton);
}

function inputSquare() {
    if(numberIsClicked == true) {
        num2 = square(num2);
        numberDisplay.textContent = num2;
    } else {
        result = square(num1);
        num1 = result;
        numberDisplay.textContent = result;
    }
}

function enableSquareButton() {
    squareButton.addEventListener('click', inputSquare);
}

function disableSquareButton() {
    squareButton.removeEventListener('click', inputSquare);
}

function inputCube() {
    if(numberIsClicked == true) {
        num2 = cube(num2);
        numberDisplay.textContent = num2;
    } else {
        result = cube(num1);
        num1 = result;
        numberDisplay.textContent = result;
    }
}

function enableCubeButton() {
    cubeButton.addEventListener('click', inputCube);
}

function disableCubeButton() {
    cubeButton.removeEventListener('click', inputCube);
}

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const answerButton = document.querySelector('#answer');
const decimalButton = document.querySelector('#decimal');
const squareButton = document.querySelector('#square');
const cubeButton = document.querySelector('#cube');

const numberDisplay = document.createElement('div');
numberDisplay.classList.add('number-display');
display.appendChild(numberDisplay);

const operatorDisplay = document.querySelector('#operator');

let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let numberIsClicked = false;
let operatorIsClicked = false;
let equalsIsClicked = false;

enableNumOneInput();
enableDecimalButton();
enableClearButton();