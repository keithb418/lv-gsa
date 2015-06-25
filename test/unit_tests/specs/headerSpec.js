/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var Header = require('view/header');
	var header = new Header();
	
	describe('Header view', function () {
		
		beforeEach(function () {
			header.render();
		});
		afterEach(function () {
			header.close();
		});
		
		it('Shows the menu being closed and opened', function () {
			expect(header.ui.menu.hasClass('menu--open')).toBe(false);
			
			spyOn(window, 'setTimeout').and.callFake(function (callback) {
				callback();
			});
			
			header.handleToggleMenu();
			
			expect(header.ui.menu.hasClass('menu--open')).toBe(true);
		});
		
		it('Will close the menu when it loses focus', function () {
			spyOn(window, 'setTimeout').and.callFake(function (callback) {
				callback();
			});
			
			header.handleToggleMenu();
			
			expect(header.ui.menu.hasClass('menu--open')).toBe(true);
			
			header.closeMenu();
			
			expect(header.ui.menu.hasClass('menu--open')).toBe(false);
			
		});
		it('Will reset the backbone history when each menu button is clicked', function () {
			spyOn(Backbone.history, "stop");
			spyOn(Backbone.history, "start");
			
			header.resetBackboneHistory();
			
			expect(Backbone.history.stop).toHaveBeenCalled();
			expect(Backbone.history.start).toHaveBeenCalled();
		});
	});
});