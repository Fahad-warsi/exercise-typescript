"use strict";
// // 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let animals = ["Lion", "Tiger", "Leopards"];
for (let i = 0; i < animals.length; i++) {
    console.log(i + 1, ":", animals[i]);
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print
for (let i = 0; i < animals.length; i++) {
    console.log(i + 1, ":", animals[i], "is part of the 'big cat' family.");
}
// a sentence such as Any of these animals would make a great pet!
console.log("All three species possess sharp claws and teeth, excellent hunting abilities, and a carnivorous diet.");
