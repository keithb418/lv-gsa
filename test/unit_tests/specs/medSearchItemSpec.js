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
		beforeEach(function () {
			spyOn(App.vent, 'trigger');
			App.collections.medList.reset();
		});
		
		it('adds an item to the med list', function () {
			expect(App.collections.medList.get('abc')).toBeFalsy();
			
			medSearchItem.addItemToList();
			expect(App.collections.medList.get('abc')).toBeTruthy();
			expect(App.vent.trigger).toHaveBeenCalledWith('refresh:med:list');
			expect(App.vent.trigger).toHaveBeenCalledWith('sync:local:storage');
		});
		
		it('does not add an item to the med list if the list has ten or more items', function () {
			for (var i = 0; i < 10; i++) {
				App.collections.medList.push(new Backbone.Model({id: i}));
			}
			
			expect(App.collections.medList.length).toEqual(10);
			
			medSearchItem.addItemToList();
			expect(App.collections.medList.length).toEqual(10);
			expect(App.collections.medList.get('abc')).toBeFalsy();
			expect(App.vent.trigger).not.toHaveBeenCalledWith('refresh:med:list');
			expect(App.vent.trigger).not.toHaveBeenCalledWith('sync:local:storage');
		});
		
		it('udpates the search', function () {
			medSearchItem.addItemToList();
			expect(App.vent.trigger).toHaveBeenCalledWith('update:search');
		});
		
		it('shows/hides the action button', function () {
			medSearchItem.addItemToList();
			expect(App.vent.trigger).toHaveBeenCalledWith('show:hide:action');
		});
	});
});