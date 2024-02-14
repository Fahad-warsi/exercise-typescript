"use strict";
// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let person = ["Hameed", "Fahad", "Amin"]; //Assign the values
let message = " I'd like to invite you to dinner."; //Assign the message
for (let i of person) {
    console.log(`Mr. ${i}, ${message}`); //Print the a message to each person.
}
console.log(`\nMr. ${person[1]} can't make the dinner. \n`); //Changing Guest List: You just heard that one of your guests can’t make the dinner,
person.splice(1, 1, "Ahmed"); //replacing the guest name
for (let i of person) {
    console.log(`Mr. ${i}, ${message}`); //print a second set of invitation.
}
console.log("\nI found a bigger dinner table.\n");
person.unshift("Shareef"); //Add one new guest to the beginning of your array.
person.splice(2, 0, "Zubair"); //Add one new guest to the middle of your array.
person.push("Ubaid"); //add one new guest to the end of your list.
for (let i of person) {
    console.log(`Mr. ${i}, ${message}`); //Print a new set of invitation messages, one for each person in your list.
}
console.log("\nI can invite only two people for dinner.\n");
//Remove guests from your list one at a time until only two names remain in your list.
console.log(person.pop(), "sorry I can't invite you to dinner.");
console.log(person.pop(), "sorry I can't invite you to dinner.");
console.log(person.pop(), "sorry I can't invite you to dinner.");
console.log(person.pop(), "sorry I can't invite you to dinner.\n");
for (let i of person) {
    console.log(`Mr. ${i}, ${message}`); //Print a message to each of the two people still on your list, letting them know they’re still invited.
}
//Remove the last two names from your list, so you have an empty list.
person.pop();
person.pop();
console.log(person); // Print your list to make sure you actually have an empty list at the end of your program.
