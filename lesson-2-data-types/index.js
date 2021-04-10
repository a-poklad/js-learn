/** 
 1)  Welcome User
Get the first name and last name from the user using the prompt box and display a welcome message that says “Hello Parvez Ansari”
 */

function welcomeUser() {
    const getName = prompt('Enter your full name')
    const result = (!getName) ? 'Hello unknown!' : `Hello ${getName}!`

    return console.log(result)
}
 welcomeUser()

/**
2) Compare Strings
Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
*/

function comparePassword() {
   const password = prompt('Enter password');
   const confirmPassword = prompt('Confirm password')
   if (password === confirmPassword) {
       return console.log('Password validated')
   } else {
       return console.log('Password do not match')
   }
}
// comparePassword()

/**
3) Calculate the length of the string
Get an input from the user using the prompt box and display the length of the string.
e.g “Parvez Ansari” should output will be 13. 
*/

function getLengthStr() {
   const str = prompt('Enter word');
   const result = (!str) ? 'Enter word, please!' : str.length

    return console.log(result)
}
// getLengthStr()


/**
4) Reverse the string
Get an input from the user using the prompt box and reverse the string.
e.g “Parvez” should return “zevrap”.
*/

function reverseStr() {
   const str = prompt('Enter word')
   const result = (!str) ? 'Enter word, please!' : str.split('').reverse().join('')

    return console.log(result)
}
// reverseStr()


/**
5) Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
 DrEvil(10): 10 dollars
 DrEvil(1000000): 1000000 dollars (pinky)
*/

function DrEvil(number) {
   
   if(isNaN(number)) {
       return console.log('Not a number!')
   } else {
       const million = 1000000;
       if(number == million) {
           return console.log(`${number} dollars (pinky)`)
       } else {
           return console.log(`${number} dollars`)
       }
   }
}
// DrEvil(1000000)

/**
6) Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
 mixUp('mix', pod'): 'pox mid'
 mixUp('dog', 'dinner'): 'dig donner'
*/

function mixUp(str1, str2) {

   const result = (!str1) ? '' : str1 + ' ' + str2

    return console.log(result)
}
// mixUp('red', 'ball')


/**
 7) Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
 */

 function verbing(str) {
     if(str.length >= 3) {
         if(str.slice(-3) == 'ing') {
             console.log(str + 'ly')
         } else {
            console.log(str + 'ing')
         }
     } else {
        console.log(str)
     }
 }
// verbing('swim')
// verbing('swimming')
// verbing('go')

/**
8) Create a function called notBad that takes a single argument, a string. It should find the first appearance of the substring 'not' and 'bad'. If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result. If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:
notBad('This dinner is not that bad!'): 'This dinner is good!'
notBad('This movie is not so bad!'): 'This movie is good!'
notBad('This dinner is bad!'): 'This dinner is bad!'
 */

function notBad(str) {
    const matchFirst = str.toLowerCase().indexOf('not')
    const matchSecond = str.toLowerCase().indexOf('bad')
    const regEx = /(not \w*? bad)/ig

    if((matchFirst != -1) && (matchSecond != -1)) {
        console.log(str.replace(regEx, 'good'))
    } else {
        console.log(str)
    }
}
// notBad('This dinner is not that bad!')
// notBad('This movie is not so bad!')
// notBad('This dinner is bad!')