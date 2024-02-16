"use strict";
// 30. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user = ["Admin", "Fahad", "Amin", "Ahmed", "Fida"];
for (let i = user.length; i >= 0; i--) {
    user.pop(); //remove all of the username from array.
}
if (user.length === 0) {
    console.log("We need to find some users.");
}
else {
    for (let i of user) {
        if (i == "Admin") {
            console.log("Hello Admin, Would you like to see a status report?");
        }
        else {
            console.log(`Hello ${i}, thank you for logging in again.`);
        }
    }
}
