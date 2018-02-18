const mochaPugLint = require('../');

describe('mocha-pug-lint', () => {
	describe("when not providing any options", () => {
		it ('should pass for test files', () => {
			mochaPugLint([
				'./test/files/bar.pug'
			], undefined);
		})	
	});

	describe("when providing options", () => {
		it ('should pass for test files', () => {
			mochaPugLint([
				'./test/files/foo.pug'
			], {
				"validateIndentation": 2,
			});
		});
	});
});