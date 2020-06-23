// require necessary module
const assert = require("assert");
const { sum, subtract } = require("../tf_math");

// define common variables
let result, expected;

// test case No. 1
result = sum(2, 84);
expected = 86;
assert.strictEqual(result, expected);

// test case No. 2
result = subtract(34, 22);
expected = 12;
assert.strictEqual(result, expected);
