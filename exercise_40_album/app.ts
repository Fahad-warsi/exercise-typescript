// 40.Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(title: string, name: string) {
  let music_album = {
    artistName: name,
    albumTitle: title,
  };
  return `Title :  ${music_album.albumTitle}, Artist : ${music_album.artistName}`;
}
let album1 = make_album("Meri Kahani", "Atif Aslam");
let album2 = make_album("Jal Pari", "Atif Aslam");
let album3 = make_album("Teri Yad", "Sajjad Ali");
console.log(album1);
console.log(album2);
console.log(album3);
//Make at least one new function call that includes the number of tracks on an album.
let album = (tracks: Number, title: string, name: string) => {
  let music_album = {
    artistName: name,
    albumTitle: title,
    NoOftracks: tracks,
  };
  return `No. of tracks : ${tracks}, Title :  ${music_album.albumTitle}, Artist : ${music_album.artistName}`;
};
let album4 = album(4, "Hawa Hawa", "Hasan Jahangir");
console.log(album4);
