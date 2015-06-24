/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedList = require('view/medList');
	var medList = new MedList();
	
	describe('MedList container', function () {
		
		medList.render();
		
		it('Handles the show/hide action and udpates the search', function () {
			spyOn(App.vent, 'trigger').and.callThrough();
			medList.updateSearchAndAction();
			expect(App.vent.trigger).toHaveBeenCalledWith('show:hide:action');
			expect(App.vent.trigger).toHaveBeenCalledWith('update:search');			
		});
		
		it('Refreshes the med list', function () {
			spyOn(medList, 'render').and.callThrough();
			
			App.vent.trigger('refresh:med:list');
			
			expect(medList.render).toHaveBeenCalled();
		});
	});
});