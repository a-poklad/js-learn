/*
Find intersection numbers in array. Two arrays as parameters. Return array with unique intersection numbers:
E.g.
[1, 2, 2, 3], [2, 3, 4] // [2, 3]
 */

// v1 - use loop for and filter and includes
const intersection1 = (arr1, arr2) => {
    let resArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr2.length; k++) {
            if (arr1[i] === arr2[k]) {
                resArr.push(arr1[i])
            }
        }
    }
    return resArr.filter((element, i, arr) => {
        return !arr.includes(element, i + 1)
    })
}


// v2 - use filter and includes
const intersection2 = (arr1, arr2) => {
    const resArr = arr1.filter((element) => {
        return arr2.includes(element)
    })

    return resArr.filter((element, i, arr) => {
        return !arr.includes(element, i + 1)
    })
}


// v3 - use Set collection
const intersection3 = (arr1, arr2) => {
    const resArr = arr1.filter((element) => {
        return arr2.includes(element)
    })

    return [...new Set(resArr)]
}
console.log('intersection v3: ', intersection3([1, 2, 2, 3], [2, 3, 4]))


// find unique not intersection
const unique = (arr1, arr2) => {
    const resArr1 = arr1.filter((element) => {
        return !arr2.includes(element)
    })
    const resArr2 = arr2.filter((element) => {
        return !arr1.includes(element)
    })

    return resArr1.concat(resArr2)
}
console.log('unique: ', unique([1, 2, 2, 3], [2, 3, 4]))