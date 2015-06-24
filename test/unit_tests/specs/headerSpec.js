/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var Header = require('view/header');
	var header = new Header();
	
	describe('Header view', function () {
		
		afterEach(function () {
			header.close();
		});
		
		header.render();
		
		it('Shows the menu being closed and opened', function () {
			expect(header.ui.menu.hasClass('menu--open')).toBe(false);
			
			header.handleToggleMenu();
			
			expect(header.ui.menu.hasClass('menu--open')).toBe(true);
		});
		
		it('Will close the menu when it loses focus', function () {
			header.handleToggleMenu();
			
			expect(header.ui.menu.hasClass('menu--open')).toBe(true);
			
			header.closeMenu();
			
			expect(header.ui.menu.hasClass('menu--open')).toBe(false);
			
		});
	});
});