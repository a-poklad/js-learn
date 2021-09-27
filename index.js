const factorial = (n) => {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

// console.log(factorial(5))

function Calculator() {
    this.a = 0
    this.b = 0

    this.read = function (a, b) {
        this.a = a
        this.b = b
    }

    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }

}

let calculator = new Calculator()

// console.log(calculator.read(2, 3))
// console.log(calculator.sum())
// console.log(calculator.mul())

// const minimum = (...numbers) => {
//     return Math.min(...numbers)
// }

// console.log(minimum(3, 8, 5))

const minimum = function () {
    return Math.min.apply(null, arguments)
}

// console.log(minimum(3, 8, 5))

// const sum = (a) => {
//     return function (b) {
//         return a + b
//     }
// }

// console.log(sum(2)(2))

// const sum = (a) => {
//     let res = a
//     let fn = function (b) {
//         if(b) {
//             res += b
//         }
//         return fn
//     }
//
//     fn.toString = () => res
//
//     return fn
// }
//
// console.log(sum(2)(2)(2))

const sumArgs = function () {
    return [].reduce.apply(arguments, [(n, accum) => {
        return n + accum
    }, 0])
}

// console.log(sumArgs(2, 4, 2))

//__________Start Promise___________
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms)
    })
}

// delay(2000).then(() => console.log('run'))


// fetch('https://reqres.in/api/users?page=2')
//     .then((res) => {
//         console.log(res.data)
//         // let arrayId = res.data.map((elem) => elem.id);
//         // const arrRes = arrayId.map((user) => {
//         //     fetch(`https://reqres.in/api/users/${user}`)
//         // })
//         // console.log(arrRes)
//         // Promise.all(arrRes)
//
//     })
//     .then(result => {
//         console.log(result)
//     })

// function getUsers(url, fn) {
//
//     fetch(url)
//         .then((res) => res.json())
//         .then(data => {
//             let arrayId = data.data.map((elem) => elem.id);
//             let requests =  arrayId.map((user) => fetch(`https://reqres.in/api/users/${user}`));
//
//             Promise.all(requests)
//                 .then(responses => Promise.all(responses.map(res => res.json())))
//                 .then(users => users.map(user => user.data.first_name + ' ' + user.data.last_name))
//                 .then(newUsers => fn(newUsers));
//         })
//         .catch((err) =>console.log(err));
//
// }
//
// getUsers('https://reqres.in/api/users?page=2', function (result) {
//     console.log(result)
// })


// async function getUsers2(url) {
//     let usersAll = await fetch(url);
//     let usersAllParse = await usersAll.json();
//
//     let usersIdArr = usersAllParse.data.map((elem) => elem.id);
//     let getUser = usersIdArr.map(async (user) => await fetch(`https://reqres.in/api/users/${user}`))
//
//     Promise.all(getUser)
//         .then(responses => Promise.all(responses.map(res => res.json())))
//         .then(users => users.map(user => user.data.first_name + ' ' + user.data.last_name))
//         .then(newUsers => console.log(newUsers));
//
// }
// getUsers2('https://reqres.in/api/users?page=2')


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

const OrdersWithProduct = () => {
    return Orders.map((elem) => {
        // const obj = {...elem}
        // let newProd = products.filter((el) => elem.productIds.includes(el.id))
        // delete obj.productIds
        // obj.products = newProd
        // return obj

        const {productIds, ...orderWithoutProductIds} = elem;
        const newProd = products.filter((el) => productIds.includes(el.id))
        return {...orderWithoutProductIds, products: newProd}
    })
}

// console.log(OrdersWithProduct())

const users = [
    {"id": 1, "firstName": "Harriette", "userName": "hgordongiles0"},
    {"id": 2, "firstName": "Dasya", "userName": "dmemory1"},
    {"id": 3, "firstName": "Victor", "userName": "vbaggs2"},
    {"id": 4, "firstName": "Tonie", "userName": "tyukhtin3"},
    {"id": 5, "firstName": "Ulick", "userName": "rartingstall4"},
    {"id": 6, "firstName": "Stearn", "userName": "sbernardin5"},
    {"id": 7, "firstName": "Lethia", "userName": "lfawthorpe6"},
    {"id": 8, "firstName": "Lucas", "userName": "lmattielli7"},
    {"id": 9, "firstName": "Stefania", "userName": "smatyugin8"},
    {"id": 10, "firstName": "Mona", "userName": "mhaill9"},
    {"id": 11, "firstName": "Maddie", "userName": "mlyffea"},
    {"id": 12, "firstName": "Tonie", "userName": "smillinb"},
    {"id": 13, "firstName": "Austina", "userName": "ahookc"},
    {"id": 14, "firstName": "Tonie", "userName": "ecriselld"},
    {"id": 15, "firstName": "Nanci", "userName": "ncloutte"},
    {"id": 16, "firstName": "Rosalie", "userName": "ranersenf"},
    {"id": 17, "firstName": "Ulick", "userName": "hmckelvieg"},
    {"id": 18, "firstName": "Quinta", "userName": "qduffellh"},
    {"id": 19, "firstName": "Rayshell", "userName": "rdelphi"},
    {"id": 20, "firstName": "Shalne", "userName": "slandmanj"},
    {"id": 21, "firstName": "Ulick", "userName": "psollask"},
    {"id": 22, "firstName": "Ulick", "userName": "uburfordl"},
    {"id": 23, "firstName": "Tonie", "userName": "cyerburym"},
    {"id": 24, "firstName": "Ulick", "userName": "vmarkwelln"},
    {"id": 25, "firstName": "Worden", "userName": "wdeanso"},
    {"id": 26, "firstName": "Darda", "userName": "djowersp"},
    {"id": 27, "firstName": "Deanne", "userName": "dposselowq"},
    {"id": 28, "firstName": "Wendy", "userName": "wdehoochr"},
    {"id": 29, "firstName": "Marian", "userName": "mdawids"},
    {"id": 30, "firstName": "Ange", "userName": "aarboint"},
    {"id": 31, "firstName": "Weber", "userName": "wchomickiu"},
    {"id": 32, "firstName": "Saba", "userName": "skimbellv"},
    {"id": 33, "firstName": "Merrilee", "userName": "mpercifullw"},
    {"id": 34, "firstName": "Barclay", "userName": "bhicksx"},
    {"id": 35, "firstName": "Bea", "userName": "bcrimpey"},
    {"id": 36, "firstName": "Gay", "userName": "gphilippz"},
    {"id": 37, "firstName": "Patton", "userName": "ghousen10"},
    {"id": 38, "firstName": "Ulick", "userName": "dsywell11"},
    {"id": 39, "firstName": "Farica", "userName": "fveryan12"},
    {"id": 40, "firstName": "Barbara", "userName": "bdevenny13"},
    {"id": 41, "firstName": "Vonni", "userName": "vjolland14"},
    {"id": 42, "firstName": "Alberik", "userName": "araincin15"},
    {"id": 43, "firstName": "Bea", "userName": "mhansberry16"},
    {"id": 44, "firstName": "Bea", "userName": "civshin17"},
    {"id": 45, "firstName": "Bea", "userName": "abeggin18"},
    {"id": 46, "firstName": "Ida", "userName": "irawlingson19"},
    {"id": 47, "firstName": "Kylynn", "userName": "kboller1a"},
    {"id": 48, "firstName": "Patton", "userName": "plaxston1b"},
    {"id": 49, "firstName": "Tatiania", "userName": "thuggett1c"},
    {"id": 50, "firstName": "Bea", "userName": "rwarrillow1d"}]


// const usersIdentities = (arr) => {
//
//     return arr.map((elem) => {
//         // const clonElem = {...elem}
//         // const findTheSameFirstName = arr.filter((el) => elem.firstName === el.firstName).length > 1
//         //
//         // if(findTheSameFirstName) {
//         //     clonElem.firstName = elem.firstName + ' (' + elem.userName + ')'
//         // }
//         // return clonElem
//
//
//         const isFirstNameDuplicate = arr.filter((el) => elem.firstName === el.firstName).length > 1
//         const newFirstName = isFirstNameDuplicate ? elem.firstName + ' (' + elem.userName + ')' : elem.firstName
//
//         return {...elem, firstName: newFirstName}
//     })
// }


const usersIdentities = (user) => {
    const arrayFirstNameDuplicate = []
    return user.map((elem) => {
        if(arrayFirstNameDuplicate.includes(elem.firstName)) {
            return {...elem, firstName: elem.firstName + ' (' + elem.userName + ')'}
        }
        const firstNameDuplicate = user.filter((el) => elem.firstName === el.firstName).length > 1
        if(firstNameDuplicate) {
            arrayFirstNameDuplicate.push(elem)
            return {...elem, firstName: elem.firstName + ' (' + elem.userName + ')'}
        }
        return elem
    })
}

// console.log(usersIdentities(users))