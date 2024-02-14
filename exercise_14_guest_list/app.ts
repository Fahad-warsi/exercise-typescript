// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

//Assign the values
let person: string[] = ["Hameed", "Fahad", "Amin"];
//Assign the message
let message: string = " I'd like to invite you to dinner.";
//Print the a message to each person.
for (let i of person) {
  console.log(`Mr. ${i}, ${message}`);
}
