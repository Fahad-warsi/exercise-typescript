// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicianNames: string[] = ["Harry potter", "Iron Man", "Loki"];

let newmagician: string[] = [];
function make_great(name: any) {
  for (let i = 0; i < name.length; i++) {
    newmagician[i] = "The Great : " + name[i];
  }
  return newmagician;
}

function show_magicians(name: any) {
  for (let i of name) {
    console.log(i);
  }
}

console.log("Adding the Great phrase");
newmagician = make_great(magicianNames); //Adding phrase "The Great"
show_magicians(newmagician); //display with phrase "The Great"
console.log("Orignal array...........");
show_magicians(magicianNames); //display original array.
