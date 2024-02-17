// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
var magicianNames = ["Harry potter", "Iron Man", "Loki"];
var magicianNames2 = ["Fahad", "Ahmed", "Amin"];
function make_great(name) {
    for (var i = 0; i < name.length; i++) {
        name[i] = "The Great : " + name[i];
    }
    return name;
}
function show_magicians(name) {
    make_great(name);
    for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
        var i = name_1[_i];
        console.log(i);
    }
}
show_magicians(magicianNames);
console.log("");
show_magicians(magicianNames2);
