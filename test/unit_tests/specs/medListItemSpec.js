/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedListItem = require('view/medListItem');
	var medListItem = new MedListItem({
		model: new Backbone.Model({
			id: "12345",
			brandName: "Sudafed",
			manufacturerName: "Advil"
		})
	});
	
	describe('MedList item', function () {
		
		medListItem.render();
		
		it('Should be checked, then added to the list', function () {
			medListItem.$el.find('input').attr("checked", "checked");
			
			spyOn(App.vent, 'trigger').and.callThrough();
			medListItem.updateAction({
				currentTarget: medListItem.$el.find('input')
			});
			
			expect(App.vent.trigger).toHaveBeenCalledWith('update:action');
			expect(App.selectedMeds.indexOf("12345")).not.toEqual(-1);
		});
		it('Should be unchecked, then removed from the list', function () {
			medListItem.$el.find('input').removeAttr("checked");
			
			spyOn(App.vent, 'trigger').and.callThrough();
			medListItem.updateAction({
				currentTarget: medListItem.$el.find('input')
			});
			
			expect(App.vent.trigger).toHaveBeenCalledWith('update:action');
			expect(App.selectedMeds.indexOf("12345")).toEqual(-1);
		});
		it('Should show the Med Label View', function () {
			spyOn(App.vent, 'trigger').and.callThrough();
			
			medListItem.viewMedLabel();
			
			expect(App.vent.trigger.calls.mostRecent().args[0]).toEqual('show:medLabel');
		});
	});
});