// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = "subaru";
//at least 5 tests evaluate to True
console.log(car == "subaru" ? true : false); // car value is equal to subaru...
console.log(car === "subaru" ? true : false); //car value & its data type is equal to subaru
console.log(car.length == 6 ? true : false); //car string length is equal to 6.
console.log(car.toLowerCase() === "subaru" ? true : false); // car string is in lower case.
console.log(car.charAt(0) == "s" ? true : false); // The value of index[0] is 's' or car string value is starting from 's' word.
console.log(""); //Add new line b/w true & false cases.
//another 5 tests evaluate to False
console.log(car != "subaru" ? true : false); // car value is not equal to subaru...
console.log(car !== "subaru" ? true : false); //car value & its data type is not equal to subaru
console.log(car.length == 4 ? true : false); //car string length is not equal to 6.
console.log(car.toUpperCase() === "subaru" ? true : false); // car string is not in upparcase.
console.log(car.charAt(0) == "f" ? true : false); // The value of index[0] is not 'f' or car string value is not starting from 'f' word.
