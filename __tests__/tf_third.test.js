// require necessary module
const { sum, subtract } = require("../tf_math");

// define common variables
let result, expected;

// test case No. 1
result = sum(2, 84);
expected = 86;
expect(result).toBe(expected);

// test case No. 2
result = subtract(34, 22);
expected = 12;
expect(result).toBe(expected);

// define common expect function
function expect(act) {
	return {
		toBe(expected) {
			if (act !== expected) {
				throw new Error(`${act} is not equal to ${expected}`);
			}
		}
	};
}
