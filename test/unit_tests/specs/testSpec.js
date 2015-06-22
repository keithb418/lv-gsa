/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedSearch = require('view/medSearch');
	var medSearch = new MedSearch();

	describe('Med Search Page', function () {
		it('redirects user to graph view', function () {
			medSearch.goToGraph();
			expect(window.location.hash).toEqual('#graph');
		});
	});

});