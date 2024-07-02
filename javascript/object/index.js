console.log("OBJECT");
//object is a complex datatype
//In object we can function CRUD operation
//CREATE
const person = {
  fName: "pramod",
  lName: "gautam",
  age: 24,
  fColor: "white",
  heigth: 5.4,
  isMale: true,
  //get full name using function
  getFullName: function () {
    return this.fName + " " + this.lName;
  },
};
//READ
console.log(person.age);
console.log(person.getFullName());

//UPDATE
person.age = 25;
console.log(person.age);

//DELETE
delete person.age;
console.log(person.age);
