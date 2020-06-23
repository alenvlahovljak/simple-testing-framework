// require necessary module
const { sum, subtract } = require("../tf_math");

// test case No. 1
const resultOne = sum(2, 84);
const expectedOne = 86;

if (resultOne !== expectedOne) {
	throw new Error(`${resultOne} is not equal to ${expectedOne}`);
}

// test case No. 2
const resultTwo = subtract(34, 22);
const expectedTwo = 12;

if (resultTwo !== expectedTwo) {
	throw new Error(`${resultTwo} is not equal to ${expectedTwo}`);
}
