const data = [
    {"name": "Simpang", "population": 1807996},
    {"name": "Nador", "population": 1573034},
    {"name": "Kandy", "population": 1860806},
    {"name": "Salto", "population": 786733},
    {"name": "Lubochnia", "population": 657970},
    {"name": "Piteå", "population": 1762491},
    {"name": "Dabbūrīya", "population": 1316758},
    {"name": "Zhenlong", "population": 1701907},
    {"name": "Bailianhe", "population": 1247264},
    {"name": "Sahagún", "population": 1770202},
    {"name": "Zonghan", "population": 832096},
    {"name": "Aradac", "population": 642563},
    {"name": "Ust’-Isha", "population": 1870869},
    {"name": "Al Qarārah", "population": 1255056},
    {"name": "Zaqatala", "population": 1056786},
    {"name": "Pamplona/Iruña", "population": 776200},
    {"name": "Makīnsk", "population": 1272627},
    {"name": "Courtaboeuf", "population": 1275066},
    {"name": "Soras", "population": 1011560},
    {"name": "Singgit", "population": 879835},
    {"name": "Raksajaya", "population": 1368187},
    {"name": "Inowrocław", "population": 784051},
    {"name": "Claver", "population": 1935398},
    {"name": "Jaroměřice nad Rokytnou", "population": 1219137},
    {"name": "Rayside-Balfour", "population": 1569840},
    {"name": "Ngancar", "population": 1570326},
    {"name": "Yegor’yevsk", "population": 834590},
    {"name": "Maroa", "population": 929286},
    {"name": "Haenam", "population": 1746420},
    {"name": "Huichang", "population": 621469},
    {"name": "Barru", "population": 1614894},
    {"name": "Ngancar", "population": 1856285},
    {"name": "Nefta", "population": 909629},
    {"name": "Hovorany", "population": 968716},
    {"name": "Baise City", "population": 878786},
    {"name": "Jega", "population": 1430621},
    {"name": "Manwakh", "population": 1883900},
    {"name": "Qabqir", "population": 633978},
    {"name": "Kungsbacka", "population": 832328},
    {"name": "Krasnoarmeysk", "population": 1151669},
    {"name": "Tampa", "population": 945073},
    {"name": "Khlong Luang", "population": 1557518},
    {"name": "Karangbenda", "population": 629148},
    {"name": "Chowṉêy", "population": 1533464},
    {"name": "Vaxholm", "population": 1441356},
    {"name": "Tobi Village", "population": 710784},
    {"name": "Libas", "population": 685628},
    {"name": "Amherstburg", "population": 993042},
    {"name": "Longlou", "population": 1787909},
    {"name": "Ketian", "population": 732402}
]

data.sort((a, b) => {
    const aToLow = a.name.toLowerCase()
    const bToLow = b.name.toLowerCase()

    // if (aToLow > bToLow) {
    //     return 1
    // }
    // if (aToLow < bToLow) {
    //     return -1
    // }
    // return 0

    return bToLow.localeCompare(aToLow) //v2

})

// console.log(data)

let arr = ["I love", "NY city"] //["I", "love", "NY", "city"]
let newArr2 = []

// arr.forEach(item => {
//     newArr2.push(item.split(' '))
// })

// let newArr3 = arr.map(item => item.split(' '))

// let newArr3 = arr.flatMap(item => item.split(' '))
// console.log(newArr3)

let data2 = [{"id": 1, "firstName": "Harriette", "userName": "hgordongiles0"},
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


const findTheSameName = data2.filter(elem => {
    return data2.filter(item => item.firstName === elem.firstName).length > 1
})

let updateData2 = data2.map(item => {
    const itemToReturn = {...item}

    findTheSameName.forEach(elem => {
        if (elem.id === itemToReturn.id) {
            itemToReturn.firstName = itemToReturn.firstName + ' ' + itemToReturn.userName
        }
    })

    return itemToReturn
})


console.log(updateData2)