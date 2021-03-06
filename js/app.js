/**
 * Main application for Minneapois Mayors 2013.
 */

/**
 * Close around functionality
 */
(function(app, $, undefined) {
  app.CandidateModel = Backbone.Model.extend({
  
  });
  
  app.CandidatesCollection = Backbone.Collection.extend({
    model: app.CandidateModel,
    
    comparator: function(c) {
      // Sort by last name
      return c.get('candidatename').split(' ').pop();
    }
  });
  
  app.CandidateView = Backbone.View.extend({
    model: app.CandidateModel,
    el: '#candidates-details',
    
    initialize: function() {
      this.templates = this.templates || {};
    },
    
    render: function() {
      app.getTemplate('template-candidate', function(template) {
        this.templates.candidate = template;
        var output = this.templates.candidate({ candidate: this.model.toJSON() });
        
        this.$el.fadeOut(function() {
          $(this).html(output);
          $(this).fadeIn();
        });
        
        this.highlightCandidate().adjustViewport();
      }, this);
      return this;
    },
    
    highlightCandidate: function() {
      $('.' + this.model.id + '').removeClass('unhighlight');
      $('.candidate-list-candidate-inner:not(.' + this.model.id + ')')
        .addClass('unhighlight');
      return this;
    },
    
    adjustViewport: function() {
      // If the viewport is to high, then
      // scroll the user down.
      if (!this.isElementInViewport(this.el)) {
        $('html, body').animate({ scrollTop: $(app.options.el).offset().top - 15 }, 1000);
      }
    },
    
    isElementInViewport: function(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.top + 50 <= window.innerHeight
      );
    }
  });
  
  app.CandidatesView = Backbone.View.extend({
    collection: app.CandidatesCollection,
    
    initialize: function() {
      this.templates = this.templates || {};
    },
    
    renderLoading: function(message) {
      app.getTemplate('template-loading', function(template) {
        this.templates.loading = template;
        this.$el.html(this.templates.loading({ message: message }));
      }, this);
      return this;
    },
    
    renderError: function(e) {
      app.getTemplate('template-error', function(template) {
        this.templates.error = template;
        this.$el.html(this.templates.error({ error: e }));
      }, this);
      return this;
    },
    
    renderCandidates: function() {
      // Only need to do once
      if (!this.renderedCandidates) {
        app.getTemplate('template-candidates', function(template) {
          this.templates.candidates = template;
          this.$el.html(this.templates.candidates({
            candidates: this.collection.toJSON(),
            options: app.options
          }));
          
          this.renderedCandidates = true;
        }, this);
      }
      return this;
    },
    
    renderCandidate: function(candidate) {
      this.candidateView = new app.CandidateView({
        model: candidate
      }).render();
    }
  });
  
  app.Application = Backbone.Router.extend({
    routes: {
      'candidates': 'routeCandidates',
      'candidate/:candidate': 'routeCandidate',
      '*defaultR': 'routeDefault'
    },
    
    defaultOptions: {
      imagePath: './css/images/'
    },
  
    initialize: function(options) {
      // Store intial options for globa use
      app.options = _.extend(this.defaultOptions, options);
      
      // Create objects that are needed app wide
      this.candidates = this.candidates || new app.CandidatesCollection();
      this.candidateView = new app.CandidatesView({
        collection: this.candidates,
        el: options.el
      });
      this.candidateView.renderLoading();
    
      // Get raw data
      app.getData('mayoral_candidates', this.processRawData, this);
    },
    
    processRawData: function(data) {
      var thisRouter = this;
      var sheet = (data['Minneapolis Mayoral Race']) ? 'Minneapolis Mayoral Race' : 'Sheet 1';
      
      _.each(data[sheet], function(c) {
        c.id = thisRouter.makeID(c.candidatename);
        c.image = c.candidatename.replace(' ', '') + '250.png';
        thisRouter.candidates.add(new app.CandidateModel(c));
      });
      
      this.start();
    },
    
    // Start application (after data has been loaded)
    start: function() {
      // Start handling routing and history
      Backbone.history.start();
    },
  
    // Default route
    routeDefault: function() {
      this.navigate('/candidates', { trigger: true, replace: true });
    },
    
    routeCandidates: function() {
      this.candidateView.renderCandidates();
    },
    
    routeCandidate: function(candidate_id) {
      this.candidateView.renderCandidates();
      this.candidateView.renderCandidate(this.candidates.get(candidate_id));
    },
    
    makeID: function(string) {
      string = string.toLowerCase();
      string = string.replace(/[^a-z0-9]/g, '_');
      string = string.replace('__', '_');
      string = string.replace('__', '_');
      return string;
    }
  });
  
})(mpApp['minnpost-minneapolis-mayors'], jQuery);