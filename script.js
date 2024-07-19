let displayNumber = "";
let number = "";
let operator = "";
let secondNumber = "";
let display = document.getElementById("calculator__display__text");
let buttonContainer = document.getElementById("calculator__buttons");
let buttons = Array.from(buttonContainer.getElementsByTagName("button"));

function updateDisplay(value) {
  displayNumber = displayNumber.concat(value); //numbers from parameter is string
  display.innerText = displayNumber;
}

function resetCalculator() {
  displayNumber = "";
  number = "";
  operator = "";
  secondNumber = "";
  updateDisplay(number);
}

function deleteLastDigit() {
  let arr = [...displayNumber]; //use spread operator
  arr.pop();
  let newNumber = "";
  arr.map((number) => {
    newNumber = newNumber.concat(number);
  });
  displayNumber = "";
  updateDisplay(newNumber);
}

function addDot() {
  if ([...displayNumber].includes(".")) {
    return; //only allow one decimal to be added
  } else {
    updateDisplay(".");
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
    case "+":
      add(number, secondNumber);
      break;
    case "-":
      subtract(number, secondNumber);
      break;
    case "*":
      multiply(number, secondNumber);
      break;
    case "/":
      divide(number, secondNumber);
      break;
  }
}

function handleOperator(value) {
  operator = value;
  console.log("operator click:" + " " + value);

  //clear display
}

function handleNumber(value) {
  if (operator !== "") {
    // clear screen and allow player to enter more values
  } else {
    updateDisplay(value);
  }
}

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    const actionMap = {
      plus: () => handleOperator("+"),
      subtract: () => handleOperator("-"),
      times: () => handleOperator("*"),
      divide: () => handleOperator("/"),
      equals: () => handleOperator("="),
      allclear: resetCalculator,
      delete: deleteLastDigit,
      dot: addDot,
      zero: () => handleNumber("0"),
      one: () => handleNumber("1"),
      two: () => handleNumber("2"),
      three: () => handleNumber("3"),
      four: () => handleNumber("4"),
      five: () => handleNumber("5"),
      six: () => handleNumber("6"),
      seven: () => handleNumber("7"),
      eight: () => handleNumber("8"),
      nine: () => handleNumber("9"),
    };

    const action = actionMap[el.id];
    if (action) action();
  });
});
