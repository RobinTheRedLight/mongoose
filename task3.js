const square = num => num * num;

const double = num => num * 2;

const addFive = num => num + 5;

const composedFunction = num => addFive(double(square(num)));

console.log(composedFunction(3));
