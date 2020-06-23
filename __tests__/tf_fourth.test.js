// require necessary module
const { sum, subtract } = require("../tf_math");

// test case No. 1
test("sum two numbers", () => {
	const result = sum(2, 84);
	const expected = 86;
	expect(result).toBe(expected);
});

// test case No. 2
test("subtract two numbers", () => {
	const result = subtract(34, 22);
	const expected = 12;
	expect(result).not.toBe(expected);
});

// define common expect function
function expect(act) {
	return {
		toBe(expected) {
			if (act !== expected) {
				throw new Error(`${act} is not equal to ${expected}`);
			}
		},
		not: {
			toBe(expected) {
				if (act === expected) {
					throw new Error(`${act} is not equal to ${expected}`);
				}
			}
		}
	};
}

//comment this function if you want to use Jest built-in test() function
// define common test function
function test(desc, cb) {
	try {
		cb();
		console.log(`OK ${desc}`);
	} catch (err) {
		console.log(`FAIL ${desc}`, err);
	}
}
