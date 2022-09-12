

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multyply = (a,b) => a * b;
const divide = (a,b) => a / b;

const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return multyply(a,b)
        case "/":
            return divide(a,b)
        default:
            return "Operation not found"
    }
}