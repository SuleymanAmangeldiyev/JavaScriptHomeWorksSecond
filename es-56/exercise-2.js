// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const developer = new Developer("Mario", "Rossi", "Front-end");
// console.log(
//   developer.firstName + " " + developer.lastName + " " + developer.role
// );

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }
}

const suley = new Person("Suleyman", "Aman");

const aimanDev = new Developer("Aiman", "Aleryany", "developer");

console.log(suley);
console.log(aimanDev);