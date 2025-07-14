class Calculator{
    constructor(){
        this.num1 = 10;
        this.num2 = 2;
    }

    add(){
        return this.num1 + this.num2;
    }

    sub(){
        return this.num1 - this.num2;
    }

    mul(){
        return this.num1 * this.num2;
    }

    div(){
        return this.num1 / this.num2;
    }

    mod(){
        return this.num1 % this.num2;
    }

}

const calc = new Calculator();
console.log("Addition: ", calc.add());
console.log("Subtraction: ", calc.sub());
console.log("Multiplication: ", calc.mul());
console.log("Division: ", calc.div());
console.log("Modulo: ", calc.mod());
