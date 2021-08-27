// let getUserData = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(result => result.data.map(item => fetch(`https://reqres.in/api/users/${item.id}`)))
//         .then(getUsers => Promise.all(getUsers))
//         .then(res => res)
//         .then(resp => Promise.all(resp.map(item => item.json())))
//         .then(users => {
//             const usersArr = users.map(user => user.data.first_name)
//             console.log(usersArr)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
//
//
// getUserData('https://reqres.in/api/users?page=2')


// function isPalindrom(e){
//     if (e < 0 ) {
//         e *= -1;
//     }
//     if (Number.isInteger(e)){
//         let x = e.toString();
//
//         let revers = x.split('').reverse().join('');
//         if ( x === revers){
//             return true
//         }
//         return false
//     }
// }

// function isPalindrom(e) {
//
//     if (!isFinite(e)) {
//         return false;
//     }
//     const numAbs = Math.abs(e);
//     const x = numAbs.toString();
//     const revers = x.split('').reverse().join('');
//     return x === revers;
// }
//
// console.log(isPalindrom(101))
// console.log(isPalindrom(-101))

// function User(name, isAdmin) {
//     this.name = name
//     this.isAdmin = isAdmin
// }
//
// User.prototype.checkUserIsAdmin = function () {
//     if(this.isAdmin) {
//         return `${this.name}  - is admin`
//     }
//     return `${this.name}  - is not admin`
// }
//
// const vlad = new User('Vlad', true)
// console.log(vlad.checkUserIsAdmin())
//
// const vasya = new User('Vasya', false)
// console.log(vasya.checkUserIsAdmin())


const user = {
    name: 'Black'
}

function inherit(obj) {
    function NewInherit() {}
    NewInherit.prototype.name = obj.name
    return new NewInherit()
}


function checkUserIsAdmin(user) {
    if(user.isAdmin) {
        return `${user.name}  - is admin`
    }
    return `${user.name}  - is not admin`
}

const userAdmin = inherit(user)
userAdmin.isAdmin = true

const userGuest = {
    name: 'Jon'
}
const userGuestFirst = inherit(userGuest)
userGuest.isAdmin = false




console.log(checkUserIsAdmin(userAdmin))
console.log(checkUserIsAdmin(userGuestFirst))