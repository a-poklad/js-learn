
const sum = a => {
    return function (b) {
        return a + b
    }
}

// console.log(sum(2)(2))

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
const inBetween = (a, b) => {
    return function (item) {
        return item >= a && item <= b
    }
}
// console.log(arr.filter(inBetween(3, 6)))

const inArray = (...array) => {
    return function (item) {
        return array.includes(item)
    }
}
// console.log(arr.filter(inArray(1,2,10)))
// console.log(arr.filter(inArray(1,2,7)))

const byField = (str) => {

    return function (a, b) {
        if (typeof a[str] !== 'string') {
            return a[str] > b[str] ? 1 : -1
        } else {
            return a[str].toLowerCase > b[str].toLowerCase ? -1 : 1
        }

    }
}

// console.log(users.sort(byField('name')))
// console.log(users.sort(byField('age')))
// console.log(users.sort(byField('surname')))

