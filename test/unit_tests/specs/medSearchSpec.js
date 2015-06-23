/*jshint -W117 */

define(function (require) {
	'use strict';

	var App = require('app');
	var MedSearch = require('view/medSearch');
	var medSearch = new MedSearch({
		collection: new Backbone.Collection()
	});

	describe('Med Search Page', function () {
		medSearch.render();
		
		it('redirects user to graph view', function () {
			medSearch.goToGraph();
			expect(window.location.hash).toEqual('#graph');
		});
		
		it('closes the search results', function () {
			spyOn(medSearch.collection, 'reset').and.callThrough();
			medSearch.ui.searchResults.addClass('open');
			
			medSearch.closeResults();
			expect(medSearch.collection.reset).toHaveBeenCalled();
			expect(medSearch.ui.searchResults.hasClass('open')).toBeFalsy();
		});
		
		it('clears the search criteria', function () {
			spyOn(medSearch, 'closeResults').and.callThrough();
			
			App.vent.trigger('close:results');
			expect(medSearch.closeResults).toHaveBeenCalled();
		});
		
		it('clears the search criteria', function () {
			medSearch.ui.medSearch.val('test');
			
			App.vent.trigger('clear:search');
			expect(medSearch.ui.medSearch.val()).toBeFalsy();
		});
		
		it('performs a search', function () {
			medSearch.setupCall = {
				done: function () {}	
			};
			
			spyOn(medSearch, 'closeResults').and.callThrough();
			spyOn(medSearch.setupCall, 'done').and.callFake(function (callback) {
				if (_.isFunction(callback)) {
					callback();	
				}
			});
			spyOn(medSearch.collection, 'fetch').and.callFake(function (options) {
				if (_.isFunction(options.success)) {
					options.success();
				}
			});
			
			medSearch.search();
			expect(medSearch.closeResults).toHaveBeenCalled();
			
			medSearch.closeResults.calls.reset();
			
			medSearch.ui.medSearch.val('a');
			medSearch.search();
			expect(medSearch.closeResults).toHaveBeenCalled();
			
			medSearch.closeResults.calls.reset();
			
			medSearch.ui.medSearch.val('ab');
			medSearch.search();
			expect(medSearch.closeResults).toHaveBeenCalled();
			
			medSearch.closeResults.calls.reset();
			
			medSearch.ui.medSearch.val('abc');
			expect(medSearch.closeResults).not.toHaveBeenCalled();
		});
	});

});