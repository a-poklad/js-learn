function sumNumbers(str) {
    const strArr = str.split(' ')
    let sumNumbers = 0

    strArr.forEach((item) => {
        if (Number(item)) {
            sumNumbers += Number(item)
        }
    }, 0)

    return sumNumbers
}

// console.log(sumNumbers('hi'));
// console.log(sumNumbers('my numbers is 2'));
// console.log(sumNumbers('This picture is an oil on canvas '
//     + 'painting by Danish artist Anna '
//     + 'Petersen between 1845 and 1910 year'));


// function threeWords(text) {
//     const textArr = text.split(' ')
//     let countWordsArr = []
//
//     textArr.forEach(item => {
//         if(!Number(item)) {
//             countWordsArr.push(item)
//             if(countWordsArr.length >= 3) {
//                 return true
//             }
//         } else {
//             countWordsArr = []
//         }
//     })
//
//     return false
// }
//
//
// console.log(threeWords("Hello World hello"))
// console.log(threeWords("He is 123 man"))


const getNeedArrayProperties = (arr1, arr2) => {
    const resultArr = arr1.map(item => {
        const newObj = {}

        arr2.forEach(key => {
            if (item.hasOwnProperty(key)) {
                newObj[key] = item[key]
            }
        })

        // for(let key in item) {
        //     if(arr2.includes(key)) {
        //         newObj[key] = item[key]
        //     }
        // }
        return newObj
    })
    return resultArr.filter(item => JSON.stringify(item) !== '{}')
}

// getNeedArrayProperties([{a: 1, b: 2, c: 3}, {}, {d: 4} ], ["a", "c"]) // [{a: 1, c: 3}, {}, {}]
// console.log(getNeedArrayProperties([{a: 1, b: 2, c: 3}, {}, {d: 4} ], ["a", "c"]))


//homework
// [{a: [1, 2, 3]}, {a: [1, 2, 3, 2]}] -> [{a: [1, 2, 3]}, {a: [1, 2, 3]}]
// {b: [5, 8, 1, 3, 5]} -> {b: [1, 3, 5, 8]}

// const someSortArr = (arr) => {
//     return arr.map(item => {
//         for(let key in item) {
//             if (item.hasOwnProperty(key)) {
//                 item[key] = [...new Set(item[key])].sort((a, b) => a - b)
//             }
//         }
//         return item
//     })
// }
// console.log(someSortArr([{a: [1, 2, 3]}, {a: [1, 2, 3, 2]}]))

const someSortObj = (arr) => {

    return arr.map(obj => {
        for(let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // newObj[key] = [...new Set(newObj[key])].sort((a, b) => a - b)
                if(Array.isArray(obj[key])) {
                    const resArr = []
                    obj[key].forEach((item) => {
                        if(!resArr.includes(item)) {
                            resArr.push(item)
                        }
                    })
                    obj[key] = resArr.sort((a, b) => a - b)
                }

            }
        }
        return obj
    })

}
// console.log(someSortObj([{a: [1, 2, 3, 2]}, {b: [5, 8, 1, 3, 5]}]))