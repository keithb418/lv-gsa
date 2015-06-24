/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedListItem = require('view/medListItem');
	var medListItem = new MedListItem({
		model: new Backbone.Model({
			
		})
	});
	
	describe('MedList item', function () {
		
		medListItem.render();
		
		it('should be truty', function () {
			expect(true).toBe(true);
		});
	});
});