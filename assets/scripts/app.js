const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput()
{
    return parseInt(usrInput.value);
}

function add()
{
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

function subtract()
{
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide()
{
    const enteredNumber = getUserInput();
    if (enteredNumber == 0)
    {
        alert ("Cannot divide by zero!");
    }
    else
    {
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
    }
}

function multiply()
{
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);