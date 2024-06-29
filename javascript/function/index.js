const upperCase = (name) => {
  return name.toUpperCase();
};
const response = upperCase("pramod");
console.log(response);
//anonymous /nameless function
const ex = function () {
  console.log("This is anonymous function");
};
ex();

//Inline function
const exs = function () {
  console.log("This is Inline function");
};
exs();

//Default function
const pagination = (page = 1, limit = 20) => {
  console.log(page, limit);
};
pagination(undefined, 100);

//Parameterize function
const f = 2;
const g = 4;
const c = 6;
const fun = (f, g, c) => {
  return f + g + c;
};
fun();

//Implicit function
const sum = (a, b) => a + b;
const a = 2;
const b = 5;
console.log(sum(a, b));
//Explicit function
const sums = (a, b) => {
  if (a > b) return a + b;
  return b + a;
};
//IIFE (Immediatly Invoked function expression)
(function () {
  console.log("IIFE:" + "Hello from Nepal");
})();
//closures function

const getEnv = () => {
  const password = "password";
  return password;
};
console.log(getEnv());
