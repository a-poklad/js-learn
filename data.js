const moment = require('moment');

function User(name, birthday) {
  this.name = name;
  this.birthday = new Date(birthday);

  const dateNow = new Date();

  Object.defineProperty(this, 'age', {
    enumerable: true,

    get() {
      return `${moment.duration(dateNow - this.birthday).years()}`;
    },
    set(value) {
      const fullYear = dateNow.getFullYear() - value;
      const date = new Date();
      date.setFullYear(fullYear)
      this.birthday = date;
    }
  })
}

const john = new User('John', '01.01.2010');

console.log(john.age);

john.age = 15;

console.log(john.age);

console.log(Object.keys(john));
console.log(delete john.age);
console.log(Object.keys(john));
