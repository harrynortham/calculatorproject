let number = "";
let operator = "";
let secondNumber = "";
let display = document.getElementById("calculator__display__text");
let buttonContainer = document.getElementById("calculator__buttons");
let buttons = Array.from(buttonContainer.getElementsByTagName("button"));

function resetCalculator() {
  number = "";
  operator = "";
  secondNumber = "";
  updateNumber(number);
}

function deleteLastDigit() {
  let arr = [...number]; //use spread operator
  arr.pop();
  let newNumber = "";
  arr.map((number) => {
    newNumber = newNumber.concat(number);
  });
  number = "";
  updateNumber(newNumber);
}

function updateNumber(value) {
  number = number.concat(value); //numbers from parameter is string
  display.innerText = number;
}

function addDot() {
  if ([...number].includes(".")) {
    return; //only allow one decimal to be added
  } else {
    updateNumber(".");
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(number, operator, secondNumber) {
  switch (operator) {
    case "add":
      add(number, secondNumber);
      break;
    case "subtract":
      subtract(number, secondNumber);
      break;
    case "multiply":
      multiply(number, secondNumber);
      break;
    case "divide":
      divide(number, secondNumber);
      break;
  }
}

function handleNumber(value) {
  updateNumber(value);
}

//make array from html collection and give each one click function
buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    // add here a switch that will perform different function for each key
    switch (element.id) {
      case "plus":
        handleOperator("+");
        break;
      case "minus":
        handleOperator("-");
        break;
      case "times":
        handleOperator("*");
        break;
      case "divide":
        handleOperator("%");
        break;
      case "equals":
        handleOperator("=");
        break;
      case "allclear":
        resetCalculator();
        break;
      case "delete":
        deleteLastDigit();
        break;
      case "dot":
        addDot();
        break;
      case "zero":
        handleNumber("0");
        break;
      case "one":
        handleNumber("1");
        break;
      case "two":
        handleNumber("2");
        break;
      case "three":
        handleNumber("3");
        break;
      case "four":
        handleNumber("4");
        break;
      case "five":
        handleNumber("5");
        break;
      case "six":
        handleNumber("6");
        break;
      case "seven":
        handleNumber("7");
        break;
      case "eight":
        handleNumber("8");
        break;
      case "nine":
        handleNumber("9");
        break;
    }
  });
});

console.log(buttons);
