
//n! = n* (n-1)
// const fac = (num) => {
//     let res = 1
//     for (let i = num; i > 0; i--) {
//         res *= i
//     }
//     return res
// }


const fac = (num) => {
    if (num === 1) {
        return num
    }
    return num * fac(num - 1)
}

// console.log(fac(5))


// const range = (a, b) => {
//     let arr = []
//
//     for (let i = a + 1; i < b; i++) {
//         arr.push(i)
//     }
//     return arr
// }

const range = (a, b) => {
    if (b - a === 2) {
        return [a + 1]
    }
    let arr = range(a, b - 1)
    arr.push(b - 1)

    return arr
}
// console.log(range(3, 8))
/*
const fiban = (num) => {
    let arr = [0, 1]
    for (let i = 2; i < num; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr
}
*/

const fiban = (num) => {
    if (num === 2) {
        return [0, 1]
    }
    let arr = fiban(num - 1)
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return arr
}

// console.log(fiban(5))

// const sum = (num) => {
//     let result = 0
//     for (let i = 0; i <= num; i++) {
//         result += i
//     }
//     return result
// }

const sum = (num) => {
    if (num === 0) {
        return 0
    }
    return num + sum(num - 1)
}

// console.log(sum(5))


// const fithButh = (num) => {
//     let resArray = []
//
//     for (let i = 1; i <= num; i++) {
//
//         if (i % 15 === 0) {
//             resArray.push('fithbuth')
//             continue
//         }
//         if (i % 3 === 0) {
//             resArray.push('fith')
//             continue
//         }
//         if (i % 5 === 0) {
//             resArray.push('buth')
//             continue
//         }
//         resArray.push(i)
//     }
//
//     return resArray
// }

const fithButh = (num) => {
    if(num === 0) {
        return []
    }
    const getValueForArray = (number) => {
        if(number % 15 === 0) {
            return 'fithbuth'
        }
        if(number % 3 === 0) {
            return 'fith'
        }
        if(number % 5 === 0) {
            return 'buth'
        }
        return number
    }

    const resArray = fithButh(num -1)
    resArray.push(getValueForArray(num))
    return resArray
}

console.log(fithButh(16))