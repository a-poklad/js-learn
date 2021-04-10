/** 
 1. Write a JavaScript function to check whether an `input` is an array or not.
 */
console.log('Array--------------------------')
console.log('Arr-1--------------------------')
function is_array(arr) {
    //v2 arr instanceof Array
    return Array.isArray(arr)
}
console.log(is_array('w3resource'))
console.log(is_array([1, 2, 4, 0]))

/** 
2. Write a JavaScript function to clone an array.
 */
console.log('Arr-2--------------------------')
function array_Clone(arr) {
    return arr.slice()
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

/** 
3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
 */
console.log('Arr-3--------------------------')
function first(arr, n) {
    if(arr == null) {
        return console.log('use array')
    }
    if(n == null) {
        return arr[0]
    } 
    if(n < 0) {
        return []
    }
    return arr.slice(0, n)
}
console.log(first([7, 9, 0, -2]))
console.log(first([],3))
console.log(first([7, 9, 0, -2],3))
console.log(first([7, 9, 0, -2],6))
console.log(first([7, 9, 0, -2],-3))

/** 
4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
 */
console.log('Arr-4--------------------------')
function last(arr, n) {
    if(arr == null) {
        return console.log('use array')
    }
    if(n == null) {
        return arr[arr.length - 1]
    } 
    // return arr.slice(Math.max(arr.length - n, 0))?????
    return arr.slice(-n)
}
console.log(last([7, 9, 0, -2]))
console.log(last([7, 9, 0, -2],3))
console.log(last([7, 9, 0, -2],6))

/** 
5. Write a simple JavaScript program to join all elements of the following array into a string.
 */
console.log('Arr-5--------------------------')
function convertArrToString(arr) {
    //arr.join(',')
    return arr.toString()
}
console.log(convertArrToString(["Red", "Green", "White", "Black"]))


console.log('Object--------------------------')

/** 
1. Write a JavaScript program to list the properties of a JavaScript object.
 */
console.log('Obj-1--------------------------')
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
}
console.log(Object.keys(student).join(','))

/** 
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
 */
console.log('Obj-2--------------------------')
var student2 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student2)
delete student2.rollno
console.log(student2)

/** 
3. Write a JavaScript program to get the length of a JavaScript object.
 */
console.log('Obj-3--------------------------')
var student3 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
}
console.log(Object.keys(student3).length)

/** 
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
 */
console.log('Obj-4--------------------------')
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]
function checkReadBooks(library) {
    library.forEach(element => {
        let status = element.readingStatus ? 'I have read ' : 'I haven\'t read '
        return console.log(status + element.title + ' by ' + element.author)
    });
}
// checkReadBooks(library)