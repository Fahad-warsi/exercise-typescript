"use strict";
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas = ["Chicken Fajita", "Cheesy Pizza", "BBQ Pizza"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]}`);
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("Pizza is a universally beloved dish enjoyed by people worldwide. It typically comprises a circular, flattened base made of dough, topped with tomato sauce, cheese, and an array of toppings such as meats, vegetables, and herbs. Baked in a hot oven, the dough turns crispy while the cheese melts, creating a deliciously satisfying meal. Pizza is highly customizable, allowing individuals to tailor it to their preferences, whether opting for classic flavors like Margherita or more adventurous combinations such as BBQ chicken or Hawaiian. With its versatility and wide appeal, pizza remains a go-to choice for an easy and delicious meal.");
