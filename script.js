let displayValue = "";
let number = 0;
let operator = "";
let secondNumber = 0;
let display = document.getElementById("calculator__display__text");
let buttonContainer = document.getElementById("calculator__buttons");
let buttons = buttonContainer.getElementsByTagName("button");
buttons = Array.from(buttons);

function allclear() {
  displayValue = "";
  number = 0;
  operator = "";
  secondNumber = 0;
  updateDisplay(displayValue);
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

function updateDisplay(value) {
  displayValue = displayValue.concat(value);
  display.innerText = displayValue;
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

//make array from html collection and give each one click function
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    // add here a switch that will perform different function for each key
    switch (element.id) {
      case "allclear":
        allclear();
        break;
      case "zero":
        updateDisplay(0);
        break;
      case "one":
        updateDisplay(1);
        break;
      case "two":
        updateDisplay(2);
        break;
      case "three":
        updateDisplay(3);
        break;
      case "four":
        updateDisplay(4);
        break;
      case "five":
        updateDisplay(5);
        break;
      case "six":
        updateDisplay(6);
        break;
      case "seven":
        updateDisplay(7);
        break;
      case "eight":
        updateDisplay(8);
        break;
      case "nine":
        updateDisplay(9);
        break;
    }

    //same function for the number keys
  });
});

console.log(buttons);
