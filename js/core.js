/**
 * Some core functionality for Minneapois Mayors 2013.
 */

/**
 * Global variable to handle some things
 * like templates.
 */
var mpApp = mpApp || {};
mpApp['minnpost-minneapolis-mayors'] = mpApp['minnpost-minneapolis-mayors'] || {};


/**
 * Non global
 */
(function(app, $, undefined) {
  /**
   * Template handling.  For development, we want to use
   * the template files directly, but for build, they should be
   * compiled into JS.
   *
   * See JST grunt plugin to understand how templates
   * are compiled.
   *
   * Expects callback like: function(compiledTemplate) {  }
   */
  app.templates = app.templates || {};
  app.getTemplate = function(name, callback) {
    var templatePath = 'js/templates/' + name + '.html';
    context = context || app;
    
    if (!_.isUndefined(app.templates[templatePath])) {
      callback.apply(context, [ app.templates[templatePath] ]);
    }
    else {
      $.ajax({
        url: templatePath,
        method: 'GET',
        async: false,
        contentType: 'text',
        success: function(data) {
          app.templates[templatePath] = _.template(data);
          callback.apply(context, [ app.templates[templatePath] ]);
        }
      });
    }
  };
  
  /**
   * Data source handling.  For development, we can call
   * the data directly from the JSON file, but for production
   * we include it in our global object.
   *
   * Expects callback like: function(data) {  }
   */
  app.data = app.data || {};
  app.getData = function(name, callback, context) {
    context = context || app;
    
    if (!_.isUndefined(app.data[name])) {
      callback.apply(context, [ app.data[name] ]);
    }
    else {
      $.getJSON('./data/' + name + '.json', function(data) {
        app.data[name] = data;
        callback.apply(context, [ data ]);
      });
    }
  };
})(mpApp['minnpost-minneapolis-mayors'], jQuery);