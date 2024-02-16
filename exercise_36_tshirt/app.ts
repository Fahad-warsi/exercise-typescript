// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

let make_shirt = (size: number, message: string) => {
  console.log(
    `The t-shirt size is ${size}, and the print message is  ${message}`
  );
};

make_shirt(5, "I love JS");
