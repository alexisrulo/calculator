//Operations

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multyply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b);
const percent = (a, b) => (Number(a) * Number(b)) / 100;

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multyply(a, b);
    case "÷":
      return divide(a, b);
    case "%":
      return percent(a, b);
    default:
      return "Operation not found";
  }
};

// Inputs
const downNumber = document.querySelector(".downNumber");
const upNumber = document.querySelector(".upNumber");

const numbers = document.querySelectorAll(".number");
let num1 = '';
let num2;
let numero1 = 1;
let numero2 = 0;
let operation;
numbers.forEach((num) =>
  num.addEventListener("click", () => {
    num1 += num.innerHTML;
    downNumber.innerText = num1;
  })
);

const operators = document.querySelectorAll(".operator");

operators.forEach((op) =>
  op.addEventListener("click", () => {
    if (num2 != undefined) {
      let result = operate(operation, num2, num1);
      downNumber.innerText = result;
      upNumber.innerText = result + op.innerHTML;
      operation = op.innerHTML;
      num2 = result;
      num1 = '';
    } 
    else {
      operation = op.innerHTML;
      num2 = num1;
      upNumber.innerText = num1 + operation;
      num1 = '';
    }
  })
);

const igual = document.querySelector("#igual");
igual.addEventListener("click", () => {
  if (num2 != undefined && num1) {
    let result = operate(operation, num2, num1);
    downNumber.innerText = result;
    upNumber.innerText = num2 + operation + num1 + '=';
    num2 = result;
    num1 = '';
  } else {
    upNumber.innerText = num1 + '=';
  }
});

// Change simbol

changeSimbol = document.querySelector(".changeSimbol");

changeSimbol.addEventListener("click", () => {});
