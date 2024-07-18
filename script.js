let displayValue = "";
let number = 0;
let operator = "";
let secondNumber = 0;
let display = document.getElementById("calculator__display__text");
let buttonContainer = document.getElementById("calculator__buttons");
let buttons = buttonContainer.getElementsByTagName("button");
buttons = Array.from(buttons);

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
  display.innerText = value;
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
    if (operator == "") {
      displayValue = displayValue.concat(element.id);
      updateDisplay(displayValue);
    }

    //same function for the number keys
  });
});

console.log(buttons);
