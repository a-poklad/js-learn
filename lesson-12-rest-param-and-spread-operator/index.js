const Orders = [
    {"id": 1, "productIds": [11, 12, 13, 15], "createdAt": {"$date": "2020-06-01T21:14:10.000Z"}},
    {"id": 2, "productIds": [11, 12, 13], "createdAt": {"$date": "2019-12-29T02:31:52.000Z"}},
    {"id": 3, "productIds": [11, 12], "createdAt": {"$date": "2020-07-24T08:49:35.000Z"}},
    {"id": 4, "productIds": [12, 13], "createdAt": {"$date": "2020-08-30T13:01:23.000Z"}},
    {"id": 5, "productIds": [14, 13, 11], "createdAt": {"$date": "2019-12-03T09:59:33.000Z"}}
]

const products = [{
    "id": 11,
    "name": "Arnoldo",
    "price": 90
}, {
    "id": 12,
    "name": "Bronnie",
    "price": 93
}, {
    "id": 13,
    "name": "Wren",
    "price": 23
}, {
    "id": 14,
    "name": "Leupold",
    "price": 37
}, {
    "id": 15,
    "name": "Stanley",
    "price": 36
}]

const OrdersWithProduct = Orders.map(item => {
    const newProd = products.filter(elem => {
        return item.productIds.includes(elem.id)
    })
    const orderToReturn = {...item}
    delete orderToReturn.productIds

    orderToReturn.products = newProd
    return orderToReturn
})

// console.log(OrdersWithProduct)


const mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    return l1.concat(l2).sort((a, b) => a - b)
}

// console.log(mergeTwoLists([1,2,4], [1,3,4]))
// console.log(mergeTwoLists([], []))
// console.log(mergeTwoLists([], [0]))

let numArr = [1, 1, 2]
const removeDuplicates = function (nums) {
    //return nums = [...new Set(nums)]
    return nums.filter((elem, i, arr) => !arr.includes(elem, i + 1))
}


// const removeElement = function(nums, val) {
//     return nums.filter(elem => {
//         return elem !== val
//     })
// }


// let arr = ["a", "b", "c"]
// let arrWithOjb = [{link: "c"}, {link: "b"}, {link: "a"}]

const easyUnpack = (arr) => {
    return [arr[0], arr[2], arr[arr.length - 2]]
}

// console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9])) // [1, 3, 7]
// console.log(easyUnpack([1, 1, 1, 1])) // [1, 1, 1]
// console.log(easyUnpack([6, 3, 7])) // [6, 7, 3]

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

