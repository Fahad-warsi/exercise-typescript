// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typesript"; }
    console.log("The t-shirt size is ".concat(size, ", and the print message is ").concat(message));
};
make_shirt();
make_shirt("medium");
make_shirt("small", "I love JS");
