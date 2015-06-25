/* jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var Graph = require('view/graph');
	var graph = new Graph({
		model: new Backbone.Model()
	});

	describe('Graph', function () {
		graph.render();
		
		beforeEach(function () {
			spyOn(graph, 'hideTooltip').and.callThrough();
			spyOn(window, 'setTimeout');
			spyOn(App.vent, 'trigger');
		});
		
		it('gets the data set', function () {
			graph.collection = new Backbone.Collection([
				{
					id: 1,
					brandName: 'Long brand name',
					warnings: [
						'warning1',
						'warning2'
					]
				},
				{
					id: 2,
					brandName: 'drug',
					warnings: [
						'warning3',
						'warning4'
					]
				}
			]);
			var dataSet = [
				[{name: 'Long brand...', id: 1}, 'warning1', 1],
				[{name: 'Long brand...', id: 1}, 'warning2', 1],
				[{name: 'drug', id: 2}, 'warning3', 1],
				[{name: 'drug', id: 2}, 'warning4', 1]
			];
			
			expect(graph.getDataSet()).toEqual(dataSet);
		});
		it('gets the medList ids', function () {
			App.collections = {
				medList: new Backbone.Collection([
					{
						id: 1
					},
					{
						id: 2
					},
					{
						id: 3
					}
				])
			};
			
			expect(graph.getMedListIds()).toEqual([1, 2, 3]);
		});
		it('gets the graph height', function () {
			graph.$el.outerHeight(400);
			
			graph.collection = new Backbone.Collection([
				{
					id: "1",
					brandName: 'Long brand name',
					warnings: [
						'warning1',
						'warning2'
					]
				},
				{
					id: "2",
					brandName: 'drug',
					warnings: [
						'warning3',
						'warning4'
					]
				}
			]);
			
			expect(graph.getGraphHeight()).toEqual(370);
			
			graph.$el.outerHeight(100);
			expect(graph.getGraphHeight()).toEqual(130);
		});
		it('shows the full drug name', function () {
			spyOn($.fn, 'position').and.callFake(function () {
				return {
					left: 100,
					top: 100	
				};
			});
			
			App.collections.medList.get("1").set('brandName', 'drug');
			
			graph.ui.tooltip = $('<div id="tooltip"></div>');
			graph.showFullDrugName({
				currentTarget: $('<div id="1"></div>')[0]
			});
			
			expect(graph.ui.tooltip.text()).toEqual('drug');
			expect(graph.ui.tooltip.hasClass('open')).toBeTruthy();
			expect(graph.ui.tooltip.attr('style')).toEqual('left: 100px; top: 100px;');
			
			window.setTimeout.calls.mostRecent().args[0]();
			expect(graph.hideTooltip).toHaveBeenCalled();
		});
		it('shows the med label', function () {
			graph.showLabel({
				currentTarget: {
					id: 1
				}
			});
			
			expect(graph.hideTooltip).toHaveBeenCalledWith(true);
			
			var eventArgs = App.vent.trigger.calls.mostRecent().args;
			expect(eventArgs[0]).toEqual('show:medLabel');
			expect(eventArgs[1].toJSON()).toEqual({id: 1});
		});
		it('hides the tooltip', function () {
			graph.ui.tooltip = $('<div id="tooltip" class="open"></div>');
			
			//Default, letting the timeout occure
			graph.hideTooltip();
			expect(graph.ui.tooltip.hasClass('open')).toBeFalsy();
			expect(window.setTimeout).toHaveBeenCalled();
			
			window.setTimeout.calls.mostRecent().args[0]();
			expect(graph.ui.tooltip.attr('style')).toEqual('left: -1000px; top: -1000px;');
			
			graph.ui.tooltip.removeAttr('style');
			window.setTimeout.calls.reset();
			
			//Preventing the timeout
			graph.hideTooltip(true);
			
			expect(window.setTimeout).not.toHaveBeenCalled();
			expect(graph.ui.tooltip.attr('style')).toEqual('left: -1000px; top: -1000px;');
		});
	});

});