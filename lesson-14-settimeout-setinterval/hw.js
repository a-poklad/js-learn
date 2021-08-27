//1. Get first 1000 fibonacci numbers, count time of making this operation
const getFibonacci = (num) => {
    let fib = [0, 1]
    for (let i = 2; i < num; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }
    return fib
}


const getFibonacciReq = (num) => {

    if(num === 2) {
        return [0, 1]
    }
    const arr =  getFibonacciReq(num - 1)
    let resSum = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(resSum)

    return arr
}

// console.log(getFibonacciReq(10))


function getTimeOfOperation(operation) {
    const timeStart = Date.now()
    operation()
    return Date.now() - timeStart
}

// console.log('for', getTimeOfOperation(() => getFibonacci(10000)))
// console.log('req', getTimeOfOperation(() => getFibonacciReq(10000)))




/* 2.Imagine you need 5 sec to read one line of document. Create a function which receive text and return time of reading this text.
For example:
text = "fsdfsfd\nfdsfdf"
secondsPerLine = 5;
result = 10;*/

const text = "fsdfsfd\nfdsfdf\nsdjkfhv"

const TimeOfReadingLine = (str) => {
    let secondsPerLine = 5
    let numLines = str.split('\n').length

    return numLines * secondsPerLine
}

console.log(TimeOfReadingLine(text))
