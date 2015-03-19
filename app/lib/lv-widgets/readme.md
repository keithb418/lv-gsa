# lv-widgets

A collection of 508-compliant utilities for use in a Backbone.Marionette web application.

Adds the LV global namespace to the window.

Dependencies: Bower, jQuery, Underscore, Backbone, Marionette, 

## Setup

bower.json

```bash
{
"lv-widgets": "https://bitbucket.org/longview/lv-widgets.git#1.0.4"
}

```
```bash
bower install

```

## Usage - Utilities

# Ajax Loader
Adds a default ajax loader to all ajax requests via jQuery.
```javascript
//Instantiation
App.AjaxLoader = new LV.AjaxLoader();

```

# Dateman
```javascript
//Instantiation
App.Dateman = new LV.Dateman();

//Methods
App.Dateman.calculateAge(new Date());

```

# Resources
```javascript
//Instantiation
App.Resources = new LV.Resources('MobileHealthPlatformWeb');

//Methods
App.Resources.get('token').href;

App.Resources.isLoggedIn();

```

## Usage - Views

# EULA View
```javascript
//Instantiation
App.views.eulaView = new LV.Views.EulaView({app: App.name});

//Mixin
LV.Views.EulaView.extend({
  decline: function () {}
});

```

# Popup Layout
```javascript
TBD

```

# Tab Layout
```javascript
//Mixin
LV.Views.TabLayout.extend({
  tabs: {
    'Grams': FilterGramView,
    'Search': FilterSearchView
  },
  defaultTab: 'Grams'
});

```
