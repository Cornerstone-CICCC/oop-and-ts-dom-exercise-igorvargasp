class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        if (this.num2 === 0) {
            return "Cannot divide by zero";
        }
        return this.num1 / this.num2;
    }

    compute(operation) {
        switch (operation) {
            case "add":
                return this.add();
            case "subtract":
                return this.subtract();
            case "multiply":
                return this.multiply();
            case "divide":
                return this.divide();
            default:
                return "Invalid operation";
        }
    }
}

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateBtn = document.getElementById("calculateBtn");
const resultSpan = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = "Please enter valid numbers";
        return;
    }

    const calculator = new Calculator(num1, num2);
    const result = calculator.compute(operation);
    resultSpan.textContent = result;
});
