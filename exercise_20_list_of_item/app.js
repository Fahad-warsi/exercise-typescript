"use strict";
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
// or anything else you’d like. Write a program that creates a list containing these items.
//Categories
let category = [
    ["Pakistan", "Inida", "Saudia Arabia"],
    ["Karachi", "Lahore", "Faislabad"],
    ["K2", "Everest", "Nanga Parbat"],
    ["Hub River", "Jhelum River", "Indus River"],
    ["Punjabi", "Urdu", "Sindhi"],
    ["Bullet Train", "Helicopter", "Boat"],
];
// print the Countries and cities
console.log("List of Countries and Cities:");
category.forEach((category, categoryindex) => {
    console.log(`Category ${categoryindex + 1}:`);
    category.forEach((item, itemindex) => {
        console.log(`  ${itemindex + 1}. ${item}`);
    });
    console.log(``); // Add a newline between categories
});
