// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let person: string[] = ["Hameed", "Fahad", "Amin"]; //Assign the values

let message: string = " I'd like to invite you to dinner."; //Assign the message

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
