console.log("hahahahah");
/*alert("hello");
prompt("what is your name?");
const person = { fname: "pramod", lname: "gautam" };
console.log(person);*/

//wap that store user info about their birth year and calculate

const year = Number(prompt("what is your birth year?")); //typecasting
console.log(year);
const age = 2024 - year;
console.log(age);

//statement -----if else
//age below 10 =child
//age below 18 =teen
//age below 29is adult
//age above 30 =old

/*if (age > 18) {
  alert("you are adult");
} else {
  alert("you are child");
}*/

//switch
/*switch (age > 18) {
  case true:
    alert("you are adult");
    break;
  case false:
    alert("you are child");
    break;
  default:
    alert("invalid");
}*/

//ternary operator
const result = age > 19 ? alert("you are adult") : alert("you are child");
