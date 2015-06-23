/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedSearchItem = require('view/medSearchItem');
	var medSearchItem = new MedSearchItem({
		model: new Backbone.Model({
			id: 'abc'
		})
	});
	
	App.collections = {
		medList: new Backbone.Collection()
	};

	describe('Med Search Item', function () {
		it('Adds an item to the med list', function () {
			expect(App.collections.medList.get('abc')).toBeFalsy();
			
			medSearchItem.addItemToList();
			expect(App.collections.medList.get('abc')).toBeTruthy();
		});
		
		it('closes the search results', function () {
			spyOn(App.vent, 'trigger');
			
			medSearchItem.addItemToList();
			expect(App.vent.trigger).toHaveBeenCalledWith('clear:search');
		});
	});
});