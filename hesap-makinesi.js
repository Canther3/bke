let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function setOperation(op) {
    if (operator && waitingForSecondOperand) {
        operator = op;
        return;
    }
    
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (operator) {
        const result = calculate();
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }
    
    operator = op;
    waitingForSecondOperand = true;
    updateDisplay();
}

function calculate() {
    if (operator === null || waitingForSecondOperand) {
        return parseFloat(displayValue);
    }
    
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }
    
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    displayValue = `${parseFloat(result.toFixed(7))}`;
    updateDisplay();
    return result;
} 