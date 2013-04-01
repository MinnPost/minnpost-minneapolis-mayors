/**
 * Main application for Minneapois Mayors 2013.
 */

/**
 * Global variable to handle some things
 * like templates.
 */
var mpApp = mpApp || {};
var mpApp['minnpost-minneapolis-mayors'] = mpApp['minnpost-minneapolis-mayors'] || {};


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
    
    if (!_.isUndefined(app.templates[templatePath])) {
      callback.apply(app, [ app.templates[templatePath] ]);
    }
    else {
      $.ajax({
        url: templatePath,
        method: 'GET',
        async: false,
        contentType: 'text',
        success: function(data) {
          app.templates[templatePath] = _.template(data);
          callback.apply(app, [ app.templates[templatePath] ]);
        }
      });
    }
  };
  
  
  
  
})(mpApp['minnpost-minneapolis-mayors'], jQuery);