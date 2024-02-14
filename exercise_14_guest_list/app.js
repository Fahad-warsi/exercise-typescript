// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
//Assign the values
var person = ["Hameed", "Fahad", "Amin"];
//Assign the message
var message = " I'd like to invite you to dinner.";
//Print the a message to each person.
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var i = person_1[_i];
    console.log("Mr. ".concat(i, ", ").concat(message));
}
