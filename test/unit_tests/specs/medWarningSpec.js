/* jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedWarning = require('model/medWarning');
	var medWarning = new MedWarning();

	describe('Med Warning Model', function () {
		it('removes the word "warning" from the warnings', function () {
			var warnings = [
				"text warning",
				"bleeding warning",
				"liver warning"
			];
			var afterWarnings = [
				"text",
				"bleeding",
				"liver"
			];
			
			expect(medWarning.parseWarningText(warnings)).toEqual(afterWarnings);
		});
	});

});