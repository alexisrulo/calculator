//Operations

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multyply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => {
    if(b==="0") return "Math Error"
    return Number(a) / Number(b)};
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
let num1 = "";
let num2;
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
    if (num2 != undefined && num1) {
      let result = operate(operation, num2, num1);
      downNumber.innerText = result;
      upNumber.innerText = result + op.innerHTML;
      operation = op.innerHTML;
      num2 = result;
      num1 = "";
    } else if (num1 === "") {
      operation = op.innerHTML;
      upNumber.innerText = num2 + operation;
    } else {
      operation = op.innerHTML;
      num2 = num1;
      upNumber.innerText = num1 + operation;
      num1 = "";
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
    num1 = "";
  } else if (num1 === '') {
    upNumber.innerText = num2 + '=';
  } else {
    upNumber.innerText = num1 + '=';
  }
});

// Change simbol

changeSimbol = document.querySelector(".changeSimbol");

changeSimbol.addEventListener("click", () => {});

//Reset

const ac = document.querySelector('.ac')

ac.addEventListener('click', () =>{
    num1 = '';
    num2 = '';
    operation = '';
    upNumber.innerText = '';
    downNumber.innerText = '0';
  })

const reset = () =>{
  num1 = '';
  num2 = '';
  operation = '';
  upNumber.innerText = '';
  downNumber.innerText = '0';
}