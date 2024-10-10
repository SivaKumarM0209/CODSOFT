// Select display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Variables to store user input
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = '';

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        // Handle Clear button
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            // Perform the calculation when equals is clicked
            secondOperand = currentInput;
            result = calculate(firstOperand, secondOperand, operator);
            display.value = result;
            currentInput = result;
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Store the first operand and operator
            operator = value;
            firstOperand = currentInput;
            currentInput = '';
        } else {
            // Handle numbers
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Function to clear the display
function clearDisplay() {
    display.value = '';
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
}

// Function to perform calculation
function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}
