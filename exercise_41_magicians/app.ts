// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
let magicianNames = ["Harry potter", "Iron Man", "Loki"];
let magicianNames1 = ["Fahad", "Ahmed", "Amin"];
function show_magicians(name: any) {
  for (let i of name) {
    console.log(i);
  }
}
show_magicians(magicianNames);
console.log("");
show_magicians(magicianNames1);
