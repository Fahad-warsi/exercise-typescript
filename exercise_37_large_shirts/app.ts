// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

let make_shirt = (
  size: string = "large",
  message: string = "I love Typesript"
) => {
  console.log(
    `The t-shirt size is ${size}, and the print message is ${message}`
  );
};
make_shirt();
make_shirt("medium");
make_shirt("small", "I love JS");
