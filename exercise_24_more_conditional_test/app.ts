// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let car = "subaru";
// • Tests for equality and inequality with strings
console.log(car == "subaru" ? true : false); //true: car value is equal to subaru...
console.log(car !== "subaru" ? true : false); // false: car value is not equal to subaru...

// • Tests using the lower case function
console.log(car.toLowerCase() === "subaru" ? true : false); // true: car string is in lower case.
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(car.length == 6 ? true : false); //true: Numerical tests involving equality
console.log(car.length !== 6 ? true : false); //false: Numerical tests involving inequality
console.log(car.length > 6 ? true : false); // false: Numerical tests involving greater than
console.log(car.length < 6 ? true : false); //false: Numerical tests involving less than
console.log(car.length >= 6 ? true : false); //True: Numerical tests involving greater than or equal to
console.log(car.length <= 6 ? true : false); //Ture: Numerical tests involving less than or equal to

// • Tests using "and" and "or" operators
console.log(car.length <= 6 && car.length >= 7 ? true : false); // false
console.log(car.length <= 10 || car.length >= 1 ? true : false); //true
// • Test whether an item is in a array
let car1: string[] = ["subaru", "BMW"];
if (car1[1] == "BMW") {
  console.log("an item is in a array"); // item in a array
} else {
  console.log("an itme is not in a array");
}

// • Test whether an item is not in a array
if (car1[2] == "BMW") {
  console.log("an item is in a array");
} else {
  console.log("an itme is not in a array"); //not in a array
}
