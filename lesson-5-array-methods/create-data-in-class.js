function checkNumbersMoreThenNull(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            return false
        }
    }
    return true
}

console.log(checkNumbersMoreThenNull([1,4,3,3]))

let arr = [4,6,78,6]

arr.every(num => num < 0)

const data = [{"id":1,"author_first_name":"Dollie","author_last_name":"Dulwitch","book_name":"Multi-layered composite collaboration","read":true,"image":"http://dummyimage.com/110x205.jpg/5fa2dd/ffffff"},
    {"id":2,"author_first_name":"Di","author_last_name":"Kwietek","book_name":"Inverse bandwidth-monitored capability","read":true,"image":"http://dummyimage.com/137x216.bmp/dddddd/000000"},
    {"id":3,"author_first_name":"Colver","author_last_name":"Rubinsky","book_name":"Upgradable modular orchestration","read":true,"image":"http://dummyimage.com/201x158.jpg/dddddd/000000"},
    {"id":4,"author_first_name":"Hermy","author_last_name":"Finlator","book_name":"Organized actuating functionalities","read":true,"image":"http://dummyimage.com/194x243.png/cc0000/ffffff"},
    {"id":5,"author_first_name":"Rikki","author_last_name":"Daintree","book_name":"Persistent 6th generation internet solution","read":false,"image":"http://dummyimage.com/194x165.png/cc0000/ffffff"},
    {"id":6,"author_first_name":"Celka","author_last_name":"Findlow","book_name":"Re-contextualized mission-critical attitude","read":false,"image":"http://dummyimage.com/101x201.jpg/ff4444/ffffff"},
    {"id":7,"author_first_name":"Corey","author_last_name":"Hernik","book_name":"Quality-focused global implementation","read":false,"image":"http://dummyimage.com/131x244.png/cc0000/ffffff"},
    {"id":8,"author_first_name":"Kilian","author_last_name":"Bispham","book_name":"Cloned analyzing data-warehouse","read":true,"image":"http://dummyimage.com/117x116.jpg/dddddd/000000"},
    {"id":9,"author_first_name":"Christi","author_last_name":"Gregr","book_name":"Implemented contextually-based projection","read":true,"image":"http://dummyimage.com/139x190.bmp/dddddd/000000"},
    {"id":10,"author_first_name":"Bellanca","author_last_name":"Nicklen","book_name":"Mandatory multi-state synergy","read":false,"image":"http://dummyimage.com/144x152.bmp/5fa2dd/ffffff"}]

// let newArr = []
// data.forEach(item => {
//     if(item.read) {
//         newArr.push(item)
//     }
// })
// console.log(newArr)

let arrFilter = data.filter(item => item.read)
// console.log(arrFilter)

let arrFind = data.find(item => item.author_first_name === 'Christi')
// console.log(arrFind)

// let newArrChangeId = []
// data.forEach(item => {
//     let newId = item.id * 2
//     item.id = newId
//     newArrChangeId.push(item)
// })

// console.log(newArrChangeId)

// let newArrMap = data.map(item => {
//     item.id * 2
//     return item
// })

let newArrMap1 = data.map(item => {
    const itemToReturn = {...item}
    itemToReturn.id *= 2
    return itemToReturn
})

// console.log(data)
console.log(newArrMap1)

console.log(data)