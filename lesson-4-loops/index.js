// 1) What is the last value alerted by this code? Why?
let i = 3
while (i) {
    alert(i--) //3,2,1
}


// 2) Which values shows in the while?
let i2 = 0
while (++i2 < 5) {
    alert(i2) //1,2,3,4
}
let i3 = 0
while (i3++ < 5) {
    alert(i3) //1,2,3,4,5
}


// 3) Replace 'for' with 'while
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let i4 = 0
while (i4 < 3) {
    alert(i4)
    i4++
}


//4) Repeat until the input is correct
let value = prompt('enter number bigger than 100', '100')
while (value <= 100) {
    if (value === null) break
    value = prompt('enter number')
}


//5) Output prime numbers
let n = 10;
next: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue next
    }
    console.log(i)
}


//6) Rewrite the 'switch' into an 'if'
let browser = 'Chrome'
if (browser === 'Edge') {
    alert('You\'ve got the Edge!')
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!')
}


//6) Rewrite 'if' to 'switch'
let a = +prompt('a?', '')
switch (a) {
    case 0:
        alert(0)
        break
    case 1:
        alert(1)
        break
    case 2:
    case 3:
        alert('2,3')
        break
}


//8) Write a JavaScript program that accepts two integers and displays the larger.
function largerNumber(n1, n2) {
    return n1 > n2 ? n1 : n2
}

console.log(largerNumber(4, 5))


//9. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
function findSign(...array) {
    let arr = array
    let sign = arr.some(num => num < 0)

    if (sign) {
        return 'The sign is -'
    }
    return 'The sign is +'

}

console.log(findSign(3, -7, 2))


//10. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
function sortNumbers(...array) {
    let arr = array
    return arr.sort((a, b) => b - a).join()
}

console.log(sortNumbers(0, -1, 4))

//11. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
function findLargestNumber(...array) {
    let arr = array
    return Math.max(...arr)
}

console.log(findLargestNumber(-5, -2, -6, 0, -1))

//12. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (let i = 0; i < 15; i++) {
    if (i % 2) {
        console.log(`${i} is odd`)
    } else {
        console.log(`${i} is even`)
    }
}

//13. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function multiplesNum() {
    for (let i = 0; i < 100; i++) {
        if ((i % 3 === 0) && (i % 5 !== 0)) {
            console.log('Fizz')
        } else if ((i % 5 === 0) && (i % 3 !== 0)) {
            console.log('Buzz')
        } else if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FizzBuzz')
        }
    }
}

multiplesNum()

//14. Write a JavaScript program to construct the following pattern, using a nested for loop.

function pattern() {
    let pattern = ''
    for (let i = 0; i < 5; i++) {
        console.log(pattern += '*')
    }
}

pattern()

//15. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function sumMultiplesNum() {
    let sumResult = 0
    for (let i = 0; i < 1000; i++) {
        if ((i % 3 === 0) && (i % 5 !== 0)) {
            sumResult += i
        } else if ((i % 5 === 0) && (i % 3 !== 0)) {
            sumResult += i
        }
    }
    return sumResult
}

console.log(sumMultiplesNum())