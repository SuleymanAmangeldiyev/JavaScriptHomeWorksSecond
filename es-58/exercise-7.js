// // # Classes - Exercise 58

// // Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`). Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.

// // class Person {
// // // ...
// // }

// // const person = new Person('Mario', 'Rossi', 25);
// // console.log(person.fullName);

// // person.firstName = 'Maria';
// // person.lastName = 'Verdi';
// // console.log(person.fullName);



// class Person {
//   constructor(firstName, lastName, age){
   
//   }
// }

// const person = new Person('Mario', 'Rossi', 25);
// console.log(person.fullName);

// person.firstName = 'Maria';
// person.lastName = 'Verdi';
// console.log(person.fullName);

class Person {
  constructor(firstName, lastName, age, fullName = "") {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._fullName = fullName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  set fullName(fullName) {
    this._fullName = fullName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);