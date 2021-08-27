const arr4 = ["About Us", "Banners", "Contacts", "Features", "Testimonials", "Welcome"]

const obj = {
    "About Us": 18,
    "Banners": 42,
    "Contacts": 25,
    "Features": 27,
    "Testimonials": 40,
    "Welcome": 9
}

const newArr4 = arr4.sort((item, item2) => obj[item] - obj[item2])

// console.log(newArr4)

const palindrome = number => {

    if (!number) return false
    const str = number.toString()
    const reverseStr = str.split('').reverse().join('')
    return str === reverseStr

}

console.log(palindrome(121))
console.log(palindrome(-121))
// console.log(palindrome(10))
// console.log(palindrome(101))


let obj2 = {
    a: {
        b: {
            c: {
                d: 4
            }
        }
    }
}
obj2 = {}
// let {a: {b: {c: {d = 2} = {}} = {}} = {}} = obj2

// let d = obj2?.a?.b?.c?.d || 3

// console.log(d)

let arr = [{a: {b: 4}}]

arr = []

// let [{a: {b = 3} = {}} = {}] = arr

// console.log(b)