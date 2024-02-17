// 45.Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
var make_car = function (model, man, color, feature) {
    var car = {
        model: model,
        manufacture: man,
        optional: {
            color: color,
            feature: feature,
        },
    };
    return "".concat(model, ", ").concat(man, ", ").concat(color, ", ").concat(feature);
    console.log();
};
console.log(make_car(2001, "Civic", "yellow", "high speed"));
console.log(make_car(2024, "BMW", "Black", "high speed"));
