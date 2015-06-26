/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedSearch = require('view/medSearch');
	var medSearch = new MedSearch({
		collection: new Backbone.Collection()
	});

	describe('Med Search', function () {
		medSearch.render();
		App.selectedMeds = [];
		App.collections = {
			medList: new Backbone.Collection()
		};
		
		beforeEach(function () {
			spyOn(medSearch, 'closeResults').and.callThrough();
			spyOn(medSearch, 'updateAction').and.callThrough();
			spyOn(medSearch, 'showHideActionBtn').and.callThrough();
			spyOn(medSearch, 'updateSearch').and.callThrough();
			spyOn(medSearch.collection, 'reset').and.callThrough();
		});
		
		describe('Event handler', function () {
			beforeEach(function () {
				spyOn(medSearch, 'bindUIElements').and.callThrough();
			});
			
			it('listens to close the search results', function () {
				App.vent.trigger('close:results');
				expect(medSearch.bindUIElements).toHaveBeenCalled();
				expect(medSearch.closeResults).toHaveBeenCalled();
			});
			
			it('listens to update the action', function () {
				App.vent.trigger('update:action');
				expect(medSearch.bindUIElements).toHaveBeenCalled();
				expect(medSearch.updateAction).toHaveBeenCalled();
			});
			
			it('listens to show or hide the action button', function () {
				App.vent.trigger('show:hide:action');
				expect(medSearch.bindUIElements).toHaveBeenCalled();
				expect(medSearch.showHideActionBtn).toHaveBeenCalled();
			});
			
			it('listens to update the search', function () {
				App.vent.trigger('update:search');
				expect(medSearch.bindUIElements).toHaveBeenCalled();
				expect(medSearch.updateSearch).toHaveBeenCalled();
			});
		});
		
		describe('Page', function () {
			beforeEach(function () {
				spyOn(App.vent, 'trigger');
				spyOn(medSearch, 'goToGraph').and.callThrough();
				spyOn(medSearch, 'deleteItems').and.callThrough();
				
				App.collections.medList.reset();
				App.selectedMeds = [];
				medSearch.action = medSearch.goToGraph;
			});
			
			it('redirects user to graph view', function () {
				medSearch.goToGraph();
				expect(window.location.hash).toEqual('#graph');
			});
			
			it('performs the current action', function () {
				medSearch.action = medSearch.goToGraph;
				medSearch.doAction();
				expect(medSearch.goToGraph).toHaveBeenCalled();
				
				medSearch.goToGraph.calls.reset();
				
				medSearch.action = medSearch.deleteItems;
				medSearch.doAction();
				expect(medSearch.goToGraph).not.toHaveBeenCalled();
				expect(medSearch.deleteItems).toHaveBeenCalled();
			});
			
			it('removes items from the medList', function () {
				for (var i = 0; i < 10; i++) {
					App.collections.medList.push(new Backbone.Model({id: i}));
					App.selectedMeds.push(i);
				}
				
				expect(App.collections.medList.length).toEqual(10);
				expect(App.selectedMeds.length).toEqual(10);
				
				medSearch.deleteItems();
				expect(App.collections.medList.length).toEqual(0);
				expect(App.selectedMeds.length).toEqual(0);
				expect(App.vent.trigger).toHaveBeenCalledWith('sync:local:storage');
				expect(medSearch.updateAction).toHaveBeenCalled();
				expect(medSearch.showHideActionBtn).toHaveBeenCalled();
				expect(medSearch.updateSearch).toHaveBeenCalled();
				
				for (var i = 0; i < 10; i++) {
					App.collections.medList.push(new Backbone.Model({id: i}));
				}
				
				App.selectedMeds.push(0);
				medSearch.deleteItems();
				expect(App.collections.medList.length).toEqual(9);
				expect(App.collections.medList.get(0)).toBeFalsy();
				expect(App.selectedMeds.length).toEqual(0);
			});
			
			it('shows or hides the action button', function () {
				medSearch.showHideActionBtn();
				expect(medSearch.ui.actionBtn.hasClass('hide')).toBeTruthy();
				
				App.collections.medList.push(new Backbone.Model({id: 0}));
				medSearch.showHideActionBtn();
				expect(medSearch.ui.actionBtn.hasClass('hide')).toBeFalsy();
			});
		
			it('closes the search results', function () {
				medSearch.ui.searchResults.addClass('open');
				
				medSearch.closeResults();
				expect(medSearch.collection.reset).toHaveBeenCalled();
				expect(medSearch.ui.searchResults.hasClass('open')).toBeFalsy();
			});
			
			it('performs a search', function () {
				spyOn(medSearch.collection, 'fetch');
				
				//Any key but Enter
				medSearch.search({});
				expect(medSearch.closeResults).toHaveBeenCalled();
				
				medSearch.closeResults.calls.reset();
				
				//Tab key
				medSearch.search({which: 9});
				expect(medSearch.collection.fetch).not.toHaveBeenCalled();
				expect(medSearch.closeResults).not.toHaveBeenCalled();
				
				//Shift-Tab key
				medSearch.search({which: 9, shiftKey: true});
				expect(medSearch.closeResults).toHaveBeenCalled();
				
				medSearch.closeResults.calls.reset();
				
				//Enter with no criteria
				medSearch.search({which: 13, preventDefault: function () {}});
				expect(medSearch.collection.fetch).not.toHaveBeenCalled();
				expect(medSearch.closeResults).toHaveBeenCalled();
				
				medSearch.closeResults.calls.reset();
				
				//Enter with criteria
				medSearch.ui.medSearch.val('test');
				medSearch.search({which: 13, preventDefault: function () {}});
				var options = medSearch.collection.fetch.calls.mostRecent().args[0];
				expect(medSearch.collection.fetch).toHaveBeenCalled();
				expect(medSearch.closeResults).not.toHaveBeenCalled();
				expect(options.url).toEqual('../MedCheckerResources/drugs/search/test');
				
				//Success callback
				options.success();
				expect(medSearch.ui.searchResults.hasClass('open')).toBeTruthy();
				
				medSearch.ui.searchResults.removeClass('open');
				
				//Error callback
				options.error();
				expect(medSearch.ui.searchResults.hasClass('open')).toBeTruthy();
				expect(medSearch.collection.reset).toHaveBeenCalled();
			});
			
			it('updates the action button', function () {
				//default
				medSearch.doAction();
				expect(medSearch.goToGraph).toHaveBeenCalled();
				expect(medSearch.ui.actionBtnIcon.hasClass('fa-bar-chart')).toBeTruthy();
				expect(medSearch.ui.actionBtnIcon.hasClass('fa-trash-o')).toBeFalsy();
				
				medSearch.goToGraph.calls.reset();
				
				//Switching to delete
				App.selectedMeds.push(0);
				medSearch.updateAction();
				expect(medSearch.ui.actionBtnIcon.hasClass('fa-bar-chart')).toBeFalsy();
				expect(medSearch.ui.actionBtnIcon.hasClass('fa-trash-o')).toBeTruthy();
				medSearch.doAction();
				expect(medSearch.deleteItems).toHaveBeenCalled();
				
				
				//Switching back to graph
				App.selectedMeds.push(0);
				App.selectedMeds = [];
				medSearch.updateAction();
				medSearch.doAction();
				expect(medSearch.goToGraph).toHaveBeenCalled();
				expect(medSearch.ui.actionBtnIcon.hasClass('fa-bar-chart')).toBeTruthy();
				expect(medSearch.ui.actionBtnIcon.hasClass('fa-trash-o')).toBeFalsy();
			});
			
			it('updates the search bar', function () {
				//default
				expect(medSearch.ui.medSearch.attr('placeholder')).toEqual('Search for a medicine...');
				expect(medSearch.ui.medSearch[0].disabled).toBeFalsy();
				expect(medSearch.ui.medSearch.val()).toEqual('');
				
				medSearch.ui.medSearch.val('test');
				
				for (var i = 0; i < 10; i++) {
					App.collections.medList.add(new Backbone.Model({id: i}));
				}
				
				//Disable the search bar
				expect(App.collections.medList.length).toEqual(10);
				medSearch.updateSearch();
				expect(medSearch.ui.medSearch.attr('placeholder')).toEqual('Max number of meds reached');
				expect(medSearch.ui.medSearch[0].disabled).toBeTruthy();
				expect(medSearch.ui.medSearch.val()).toEqual('');
				
				App.collections.medList.remove(0);
				
				//Enable the search bar
				expect(App.collections.medList.length).toEqual(9);
				medSearch.updateSearch();
				expect(medSearch.ui.medSearch.attr('placeholder')).toEqual('Search for a medicine...');
				expect(medSearch.ui.medSearch[0].disabled).toBeFalsy();
			});
		});
	});

});