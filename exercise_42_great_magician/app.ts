// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
let magicianNames: string[] = ["Harry potter", "Iron Man", "Loki"];
let magicianNames1: string[] = ["Fahad", "Ahmed", "Amin"];

function make_great(name: any) {
  for (let i = 0; i < name.length; i++) {
    name[i] = "The Great : " + name[i];
  }
  return name;
}

function show_magicians(name: any) {
  make_great(name);
  for (let i of name) {
    console.log(i);
  }
}

show_magicians(magicianNames);
console.log("");
show_magicians(magicianNames1);
