/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MainLayout = require('view/mainLayout');
	var mainLayout = new MainLayout();
	
	describe('Main Layout', function () {
		it('Shows the graph', function () {
			mainLayout.showGraph();
			expect(window.location.hash).toEqual('#graph');
		});
		
		it('Triggers some events', function () {
			spyOn(App.vent, 'trigger');
			
			mainLayout.triggerEvent();
			expect(App.vent.trigger).toHaveBeenCalledWith('close:menu');
			expect(App.vent.trigger).toHaveBeenCalledWith('close:results');
		});
	});
});