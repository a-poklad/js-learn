const sumArg = function () {
    return [].reduce.call(arguments, (item, accum) => {
        return accum + item
    }, 0)
}

// console.log(sumArg(3, 2, 3))

const maxNumber = function (arr) {
    // return Math.max.apply(this, arguments[0])
    return Math.max.apply(null, arr)
}

// console.log(maxNumber([2, 4, 6]))



function checkFun(a, b, c){
    console.log(this)
    console.log(a)
    console.log(b)
    console.log(c)
}

checkFun.apply(1, [2,3,4])