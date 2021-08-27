function E() {
    this.a = 1;
    this.c = function () {
        return function () {
            return this.a;
        }
    }
}

// const {c} = new E;
const newE = new E;
const {c} = newE;


// console.log('c      :', c().call(newE));
// console.log('c.call :', c().call({a: 2}));


// function sum(num) {
//     let result = num
//     let fn = function (b) {
//         if(!b) {
//             result += 0
//         } else {
//             result += b
//         }
//         return fn
//     }
//     fn.valueOf = () => result
//     return fn
// }

// console.log(sum(2)(2)(3)()(5))

const sum = (a, b) => a + b

const max = function (fn, num) {
    let count = 0
    return function () {
        if (count >= num) {
            return 'It is max'
        }
        count++
        return fn.apply(null, arguments)
    }
}

const max1 = max(sum, 2)

// console.log(max1(1,2))
// console.log(max1(1,2))
// console.log(max1(1,2))


function User(fullName) {
    this.fullName = fullName

    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return this.fullName.split(' ')[0]
            },
            set: function (value) {
                this.fullName = value + ' ' + this.lastName
            }
        },
        lastName: {
            get: function () {
                return this.fullName.split(' ')[1]
            },
            set: function (value) {
                this.fullName = this.firstName + ' ' + value
            }
        },

    })
}


const user1 = new User('Alex Key')

// console.log(user1.firstName)
// console.log(user1.lastName)



const add = (a) => {
    let result = a
    let fn = function(b) {
        if(!b) {
            result += 0
        } else {
            result += b
        }
        return fn
    }

    fn.toString = () => result

    return fn
}

add(2)(2)(4)






