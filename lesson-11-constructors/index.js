let Calc = function (number1, number2) {
    this.number1 = number1
    this.number2 = number2

    this.minus = function () {
        return this.number1 - this.number2
    }

    this.plus = function () {
        return this.number1 + this.number2
    }

    this.multiples = function () {
        return this.number1 * this.number2
    }

    this.devide = function () {
        return this.number1 / this.number2
    }

    this.reed = function (num1, num2) {
        [this.number1, this.number2] = [num1, num2]
    }

    this.clear = function () {
        this.number1 = 0
        this.number2 = 0
    }

}

let calc1 = new Calc(2, 3)
// console.log(calc1.plus())
// console.log(calc1.multiples())
// console.log(calc1.reed(5, 5))
// console.log(calc1.plus())
// console.log(calc1.clear())
// console.log(calc1.plus())

