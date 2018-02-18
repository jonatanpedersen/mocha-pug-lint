const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const globAll = require('glob-all');
const Linter = require('pug-lint');
const stripAnsi = require('strip-ansi');
const textTable = require('text-table');
const configFile = require('pug-lint/lib/config-file');

module.exports = function (patterns, options) {
	describe('pug-lint', function () {
		globAll.sync(patterns)
			.forEach(function (file) {
				it(`${file} should pass pug-lint rules`, function() {
					const linter = new Linter();

					if (options === undefined) {
						const dir = path.dirname(file);
						options = configFile.load(null, dir);
					}
					
					linter.configure(options);
					const errors = linter.checkFile(file);

					if (errors && errors.length > 0) {
						let message = chalk.white.underline(`\n${file} did not pass pug-lint rules\n`);
						message += errorsTable(errors);
						message += chalk.red.bold(`\n\n✖ ${errors.length} ${errors.length === 1 ? 'error' : 'errors'}\n`);

						let error = new Error(message);
						delete error.stack;

						throw error;
					}
				});
		});
	});
}

function errorsTable (errors) {
	return textTable(
		errors.map(function (error) {
			return [
				chalk.white(''),
				`line ${error.line || 0}`,
				`column ${error.column || 0}`,
				chalk.cyan(error.message)
			]
		}),
		{
			align: ['', 'r', 'l'],
			stringLength: function (str) {
				return stripAnsi(str).length;
			}
		}
	);
}