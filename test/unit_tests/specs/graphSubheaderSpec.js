/* jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var GraphSubheader = require('view/graphSubheader');
	var graphSubheader = new GraphSubheader({
		model: new Backbone.Model()
	});

	describe('Graph Subheader', function () {
		it('goes to the med list', function () {
			window.location.hash = '#graph';
			
			graphSubheader.showMedList();
			expect(window.location.hash).toEqual('');
		});
		it('hides the graph instructions', function () {
			spyOn(graphSubheader, "render").and.callThrough();
			
			graphSubheader.model.set('length', 5);
			
			App.vent.trigger('hide:graph:instructions');
			expect(graphSubheader.render).toHaveBeenCalled();
			expect(graphSubheader.model.get('length')).toEqual(0);
		});
	});

});