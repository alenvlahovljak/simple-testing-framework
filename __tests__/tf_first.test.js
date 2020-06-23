const actual = true;
const expected = false;
const assertion = actual !== expected;

if (assertion) {
	throw new Error(`Test_1: ${actual} is not ${expected}`);
}
