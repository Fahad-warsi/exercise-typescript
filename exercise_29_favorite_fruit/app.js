"use strict";
// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Mango", "cherry", "Apple"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
for (let i of favorite_fruits) {
    if (i == "Apple") {
        console.log("You really like Apple");
    }
    else if (i == "Mango") {
        console.log("You realy like Mango");
    }
    else if (i == "cherry") {
        console.log("You really like Cherry");
    }
    else if (i == "Orange") {
        console.log("You really like orange");
    }
    else if (i == "Pineapple") {
        console.log("You really like Pineapple");
    }
}
