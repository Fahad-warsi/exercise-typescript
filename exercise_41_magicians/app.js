// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
var magicianNames = ["Harry potter", "Iron Man", "Loki"];
var magicianNames2 = ["Fahad", "Ahmed", "Amin"];
function show_magicians(name) {
    for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
        var i = name_1[_i];
        console.log(i);
    }
}
show_magicians(magicianNames);
console.log("");
show_magicians(magicianNames2);
