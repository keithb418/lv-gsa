//Tab Layout
// ---------

LV.Views.TabLayout = Backbone.Marionette.Layout.extend({
  template: function () {
    var data = this.serializeData();
    return JST['html/lv-view-tab-layout.html'](this.mixinTemplateHelpers(data));
  },
  tabs: {
  },
  defaultTab: '',
  mixinTemplateHelpers: function (target) {
    target = target || {};
    var templateHelpers = this.templateHelpers;
    if (_.isFunction(templateHelpers)) {
      templateHelpers = templateHelpers.call(this);
    }
    return _.extend(target, templateHelpers, { tabs: this.tabs, defaultTab: this.defaultTab });
  },
  _defaultEvents: {
    'click .lv-tabs a': 'handleTabClicked'
  },
  _defaultRegions: {
    tabContent: '.lv-tab-content'
  },
  _defaultUi: {
    tabs: '.lv-tabs'
  },
  constructor: function () {
    this.events = _.extend({}, this._defaultEvents, this.events);
    this.regions = _.extend({}, this._defaultRegions, this.regions);
    this.ui = _.extend({}, this._defaultUi, this.ui);
    Backbone.Marionette.Layout.prototype.constructor.apply(this, arguments);
  },
  handleTabClicked: function (e) {
    e.preventDefault();
    var tab = $(e.target).text();

    if (this.tabs[tab] !== undefined) {
      this.setActiveTab(tab);
    }
  },
  loadTab: function (Target) {
    var View, viewInstance;
    if (Target instanceof Backbone.Marionette.View) {
      viewInstance = Target;
      viewInstance.delegateEvents();
    } else {
      if (Target.prototype && _.isFunction(Target.prototype.constructor)) {
        View = Target;
      } else {
        View = Backbone.Marionette.ItemView.extend({template: _.template(Target)});
      }
      viewInstance = new View();
    }
    this.listenToOnce(this, 'show', this.onShowTab);

    this.tabContent.show(viewInstance);
  },
  onShowTab: function () {},
  resetActiveTab: function () {
    this.ui.tabs.find('li').removeClass('active');
  },
  setActiveTab: function (tab) {
    this.resetActiveTab();
    var tabNames = _.keys(this.tabs),
      idx = _.indexOf(tabNames, tab);
    var target = this.tabs[tab];
    this.currentTab = tab;
    this.loadTab(target);
    this.ui.tabs.find('li')[idx].className += ' active';
  },
  render: function () {
    Backbone.Marionette.Layout.prototype.render.apply(this, arguments);
    if (this.defaultTab && this.tabs[this.defaultTab] && !this.currentTab) {
      this.loadTab(this.tabs[this.defaultTab]);
    } else if (this.currentTab) {
      this.setActiveTab(this.currentTab);
    }
    return this;
  }
});
