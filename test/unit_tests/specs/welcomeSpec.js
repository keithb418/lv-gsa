/* jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var Welcome = require('view/welcome');
	var welcome = new Welcome();

	describe('Welcome Page', function () {
		it('Expects the routes to change', function () {
			spyOn(welcome, "changeToLoggedInRoutes");
			welcome.changeToLoggedInRoutes();
			expect(welcome.changeToLoggedInRoutes).toHaveBeenCalled();
		});
		it('Expects to remove the class welcome on the close of the view', function () {
			spyOn(welcome, "onClose");
			welcome.onClose();
			expect(welcome.onClose).toHaveBeenCalled();
		});
	});

});