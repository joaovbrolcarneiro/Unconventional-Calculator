const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput()
{
    return parseInt(usrInput.value);
}

function add()
{
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: 'ADD',
        previousResult: secondNumber,
        newNumber: enteredNumber,
        result : currentResult,
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function subtract()
{
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: 'SUBTRACT',
        previousResult: secondNumber,
        newNumber: enteredNumber,
        result : currentResult,
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function divide()
{
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    if (enteredNumber == 0)
    {
        alert ("Cannot divide by zero!");
    }
    else
    {
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: 'DIVIDE',
        previousResult: secondNumber,
        newNumber: enteredNumber,
        result : currentResult,
    }
    logEntries.push(logEntry);
    console.log(logEntries);
    }
}

function multiply()
{
    const enteredNumber = getUserInput();
    const secondNumber = currentResult;
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: 'MULTIPLY',
        previousResult: secondNumber,
        newNumber: enteredNumber,
        result : currentResult,
    }
    logEntries.push(logEntry);
        console.log(logEntries);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);