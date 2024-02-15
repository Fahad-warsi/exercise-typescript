"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
//let places: string[] = ["Paris", "Dubai", "New York", "Barcelon", "Istanbul"];
let places = [
    "himalaya",
    "andes",
    "tierra del fuego",
    "labrador",
    "guam",
];
// • Print your array in its original order.
console.log("Original order.....");
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("after sort alphabetical order......");
let arr = places.slice(0, 5);
console.log(arr.sort());
// • Show that your array is still in its original order by printing it.
console.log("Original order......");
console.log(places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("after reverse alphabetical order......");
console.log(arr.reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Original order......");
console.log(places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("after reverse......");
let arr1 = places.slice(0, 5);
console.log(arr1.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original order......");
console.log(places);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("after sort alphabetical order......");
console.log(arr.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("after reverse alphabetical order......");
console.log(arr.reverse());
