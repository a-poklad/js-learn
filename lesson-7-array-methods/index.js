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
    const str = number.toString()
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    const reverseStr = arr.reverse().join('')

    if (str === reverseStr) {
        return true
    } else {
        return false
    }

}

console.log(palindrome(121))
console.log(palindrome(-121))
console.log(palindrome(10))
console.log(palindrome(101))