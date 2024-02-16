"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["Fahad", "Amin", "Ahmed", "Aamir", "Salman"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["FaHad", "Raheel", "Ahmed", "Kashif", "Furqan"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let i of new_users) {
    for (let j of current_users) {
        if (i === j) {
            console.log("User name has already been used.Plesae enter a new user name...!!!");
        }
        else {
            console.log("User name is available.");
        }
    }
}
