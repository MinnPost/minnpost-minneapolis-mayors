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
  app.getTemplate = function(name, callback, context) {
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

this["mpApp"] = this["mpApp"] || {};
this["mpApp"]["minnpost-minneapolis-mayors"] = this["mpApp"]["minnpost-minneapolis-mayors"] || {};
this["mpApp"]["minnpost-minneapolis-mayors"]["templates"] = this["mpApp"]["minnpost-minneapolis-mayors"]["templates"] || {};

this["mpApp"]["minnpost-minneapolis-mayors"]["templates"]["js/templates/template-candidate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="candidate-details-container clear-block">\n  <div class="candidate-details-left">\n    <div class="candidate-details-left-inner">\n      <h3>' +
((__t = ( candidate.candidatename )) == null ? '' : __t) +
'</h3>\n    \n      <h4>Bio</h4>\n      ';
 if (candidate.biotext) { ;
__p += '\n        ' +
((__t = ( candidate.biotext )) == null ? '' : __t) +
'\n      ';
 } else { ;
__p += '\n        <p>(not available)</p>\n      ';
 } ;
__p += '\n      \n      <h4>Why are you running for mayor?</h4>\n      ';
 if (candidate.whymayorquote) { ;
__p += '\n        ' +
((__t = ( candidate.whymayorquote )) == null ? '' : __t) +
'\n      ';
 } else { ;
__p += '\n        <p>(not available)</p>\n      ';
 } ;
__p += '\n      \n    </div>\n  </div>\n  \n  <div class="candidate-details-right">\n    <div class="candidate-details-right-inner">\n      <h3>&nbsp;</h3>\n      \n      <div class="candidate-stats sans-serif">\n        <div>\n          <span class="candidate-stats-label">Age</span>: ' +
((__t = ( candidate.age )) == null ? '' : __t) +
'\n        </div>\n        \n        <div>\n          <span class="candidate-stats-label">Neighborhood</span>: ' +
((__t = ( candidate.neighborhood )) == null ? '' : __t) +
' (<a href="https://maps.google.com/maps?q=' +
((__t = ( encodeURI(candidate.neighborhood) )) == null ? '' : __t) +
'+minneapolis+mn" target="_blank">map</a>)\n        </div>\n        \n        <div>\n          <span class="candidate-stats-label">Occupation</span>: ' +
((__t = ( candidate.occupation )) == null ? '' : __t) +
'\n        </div>\n        \n        <div>\n          <span class="candidate-stats-label">Previous offices</span>: ' +
((__t = ( candidate.previouspoliticalofficesheld )) == null ? '' : __t) +
'\n        </div>\n      </div>\n      \n      <h4>Endorsements</h4>\n      \n      <div class="candidate-endorsements sans-serif">\n        <p>' +
((__t = ( candidate.supportersandendorsements )) == null ? '' : __t) +
'</p>\n      </div>\n      \n      <h4>Links</h4>\n      \n      <div class="candidate-links sans-serif">\n        <div>\n          <a href="' +
((__t = ( candidate.websiteurl )) == null ? '' : __t) +
'" target="_blank">Website</a>\n        </div>\n        \n        <div>\n          <a href="' +
((__t = ( candidate.twitterhandle )) == null ? '' : __t) +
'" target="_blank">Twitter</a>\n        </div>\n      </div>\n      \n      <h4>Read more</h4>\n      \n      <div class="candidate-links sans-serif">\n        ';
 if (candidate.firstarticlelink) { ;
__p += '\n          <div>' +
((__t = ( candidate.firstarticlelink )) == null ? '' : __t) +
'</div>\n        ';
 } ;
__p += '\n        \n        ';
 if (candidate.secondarticlelink) { ;
__p += '\n          <div>' +
((__t = ( candidate.secondarticlelink )) == null ? '' : __t) +
'</div>\n        ';
 } ;
__p += '\n        \n        ';
 if (candidate.thirdarticlelink) { ;
__p += '\n          <div>' +
((__t = ( candidate.thirdarticlelink )) == null ? '' : __t) +
'</div>\n        ';
 } ;
__p += '\n      </div>\n  \n    </div>\n  </div>\n</div>';

}
return __p
};

this["mpApp"]["minnpost-minneapolis-mayors"]["templates"]["js/templates/template-candidates.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="candidates-container">\n  <p class="click-candidate-desciption sans-serif">Click candidate to see details</p>\n\n  <div class="candidates-list clear-block">\n    ';
 _.each(candidates, function(c) { ;
__p += '\n      <div class="candidate-list-candidate">\n        <div class="candidate-list-candidate-inner sans-serif ' +
((__t = ( c.id )) == null ? '' : __t) +
'">\n          <a href="#candidate/' +
((__t = ( c.id )) == null ? '' : __t) +
'">\n            <img src="' +
((__t = ( options.imagePath )) == null ? '' : __t) +
'' +
((__t = ( c.image )) == null ? '' : __t) +
'" />\n          </a>\n          <a href="#candidate/' +
((__t = ( c.id )) == null ? '' : __t) +
'">' +
((__t = ( c.candidatename )) == null ? '' : __t) +
'</a>\n        </div>\n      </div>\n    ';
 }) ;
__p += '\n  </div>\n\n  <div class="candidate-details-divider"></div>\n  \n  <div id="candidates-details" class="clear-block">\n  </div>\n</div>';

}
return __p
};

this["mpApp"]["minnpost-minneapolis-mayors"]["templates"]["js/templates/template-error.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="error-container">\n  <div class="error"><span>There was an error.  ' +
((__t = ( (error) ? error : '' )) == null ? '' : __t) +
'</span></div>\n</div>';

}
return __p
};

this["mpApp"]["minnpost-minneapolis-mayors"]["templates"]["js/templates/template-loading.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="loading-general-container">\n  <div class="loading-general"><span>Loading...</span></div>\n</div>';

}
return __p
};

mpApp["minnpost-minneapolis-mayors"].data["mayoral_candidates"] = {"Minneapolis Mayoral Race":[{"candidatename":"Mark Andrew","occupation":"Founder and manager of GreenMark, an environmental consulting and marketing company","age":62,"neighborhood":"Lynnhurst","previouspoliticalofficesheld":"Hennepin County Commissioner, Board Chair","twitterhandle":"http://www.twitter.com/MarkForMPLS","websiteurl":"http://www.markforminneapolis.com/","supportersandendorsements":"Hennepin County Commissioner Peter McLaughlin, Minneapolis School Board Chair Alberto Monserrate, Minneapolis Park and Recreation Board Member Anita Tabb, Minneapolis School Board Member Richard Mammen, Rep. Jim Davnie, Rep. Phyllis Kahn","whymayorquote":"<p>\"I have incredible passion for our city. I made a lifelong commitment to our city. I bought my homes in the city. I raised my children in the city, and my children attended public schools in the city. I dedicated my early career to making things better, and the city and the county and I have a deep and passionate commitment.</p>\n\n<p>It’s a very good time for me to be running for mayor. I have indefatigable energy. I have a fabulous perspective as a businessperson who has also had more public experience than any candidate running for mayor.</p>\n\n<p>I think my skill sets — and this is probably the single most important thing — I have skill sets that ideally match what the modern mayor is supposed to be doing: A bold vision, an ability to collaborate and the creative know-how to reach across different jurisdictions to get things done.</p>\n\n<p>Finally, I have an excellent relationship with the corporate community. I am going to be side by side with the business community addressing these problems because government can’t do it all.\"</p>","biotext":"<p>Mark Andrew has held public office, run his own businesses and perhaps has sold you french fries as a State Fair vendor. After 12 years in the private sector, the former Hennepin County commissioner is once again seeking public office, entering the race for Minneapolis mayor.</p>\n\n<p>He now runs the environmental consulting and marketing company GreenMark.</p>\n\n<p>Andrew, 62, started his career at the University of Minnesota, where, as one of the student founders of the Minnesota Public Interest Research Group, he became its first president.</p>\n\n<p>He later served as state chair of the DFL and was on the Hennepin County Board from 1982 until 1999.</p>","firstarticlelink":"<a href=\"http://www.minnpost.com/politics-policy/2013/03/minneapolis-mayoral-candidate-mark-andrew-q-i-have-skill-set-and-relationshi\">MinnPost Q+A</a>","secondarticlelink":"","thirdarticlelink":"","rowNumber":1},{"candidatename":"Jackie Cherryhomes","occupation":"President at Cherryhomes-Tyler, Inc.","age":58,"neighborhood":"Willard-Hay","previouspoliticalofficesheld":"Minneapolis City Councilmember and President","twitterhandle":"http://www.twitter.com/CherryhomesMpls","websiteurl":"http://jackiecherryhomesformayor.com/","supportersandendorsements":"Former Mayor Sharon Sayles Belton, Former U of M vice president for University Services Kathy O’Brien, Former City Council Member Walter Rockenstein, Former City Council Member Tony Scallon","whymayorquote":"<p>\"I am a lifelong resident of Minneapolis. I am the daughter of an 86-year-old woman living in South Minneapolis and the mother of a 16-year-old that I’m raising in North Minneapolis.</p>\n\n<p>I am someone who has what I sort of think of as a trifecta. I’ve been a community organizer most of my life, in one capacity or another, but organizing people. I have experience in the private sector, having run my own business successfully for the last 12 years and having interacted with a lot of the private sector. And I have experience running the City of Minneapolis, having been the City Council President.</p>\n<p>I left office 12 years ago and I’ve spent the last 12 years in a consulting practice that I’ve built that’s successful.</p>\n\n<p>I am running, not because I am looking at this as a stepping-stone to anything else. I look at this as an opportunity to give back to the city that is my city some good stuff I’ve learned over the years.\"</p>","biotext":"<p>Jackie Cherryhomes won her first election 24 years ago, when she was elected to the Minneapolis City Council in 1989 to represent Ward 5 on the north side. Four years later, she became City Council president.</p>\n\n<p>Under her leadership, the city purchased Target Center, built Block E, moved the historic Shubert Theater and expanded the Convention Center.</p>\n\n<p>For the last 12 years, she has run her own business as a consultant and lobbyist for developers, school districts and small businesses.</p>","firstarticlelink":"<a href=\"http://www.minnpost.com/politics-policy/2013/03/minneapolis-mayoral-candidate-jackie-cherryhomes-q-i-bring-hands-experience-\">MinnPost Q+A</a>","secondarticlelink":"","thirdarticlelink":"","rowNumber":2},{"candidatename":"Betsy Hodges","occupation":"City Councilmember, President of the Minnesota League of Cities","age":43,"neighborhood":"Linden Hills","previouspoliticalofficesheld":"Minneapolis City Councilmember, Budget Committee Chair","twitterhandle":"https://twitter.com/BetsyHodges","websiteurl":"http://www.betsyhodges.org/","supportersandendorsements":"Sen. Scott Dibble, Dr. Josie Johnson, Rep. Frank Hornstein, City Council Member John Quincy, Judge LaJune Lange, The DFL Latino Caucus","whymayorquote":"<p>\"Minneapolis is at a big decision point. We are at a crossroads in the city. We are at a place where we have to decide who we are as a people and who we want to be as a community. We have to make that decision together.</p>\n\n<p>We have just weathered well a recession. We have weathered well 15 years of budget cuts at the state level, and we have responded to that with openness and transparency. The city is on excellent footing. I’m proud to have been part of that.</p>\n\n<p>But now is the time we need to decide how we’re going to move forward. We need to make sure we build on those successes to become a unified Minneapolis.\"<p>","biotext":"<p>Betsy Hodges, first elected to the City Council in 2005, represents the Linden Hills neighborhood in the southwest corner of Minneapolis.</p>\n\n<p>She chairs the council’s Ways & Means/Budget Committee.</p>\n\n<p>Hodges, 43, is the current president of the Minnesota League of Cities. Raised in Minnesota, she attended high school in Plymouth, and has a BA from Bryn Mawr College and a Masters in sociology from the University of Wisconsin. </p>","firstarticlelink":"<a href=\"http://www.minnpost.com/politics-policy/2013/03/minneapolis-mayoral-candidate-betsy-hodges-q-we-need-come-together-and-move-\">MinnPost Q+A</a>","secondarticlelink":"","thirdarticlelink":"","rowNumber":3},{"candidatename":"Don Samuels","occupation":"City Councilmember","age":63,"neighborhood":"Jordan","previouspoliticalofficesheld":"Minneapolis City Councilmember","twitterhandle":"https://twitter.com/Don__Samuels","websiteurl":"http://www.facebook.com/DonSamuelsForMayor","supportersandendorsements":"Former Minneapolis Police Chief Tim Dolan","whymayorquote":"<p>\"I think there are some things that are part of the city’s life that have become normal that can be significantly improved. I think I bring the skills, characteristics, and maybe even the character, to get them done.</p>\n\n<p>That would be addressing some of the education issues that have dogged us for a long time. I have a lot of passion around that subject and a lot of will to change things.\"</p>","biotext":"<p>Minneapolis City Council Member Don Samuels was 20 years old with $83 in his pocket when he arrived in New York City as an immigrant from Jamaica coming here to study industrial design.</p>\n\n<p>That was 43 years ago. During the intervening years, he worked as an executive with a Fortune 500 toy company before starting his own business inventing and designing toys for major manufacturers. One wall of his City Hall office is decorated with toys he designed.</p>\n\n<p>Samuels, 63, was elected to the City Council in February 2003 in a 3rd Ward special election. He now represents the 5th Ward.</p>\n\n","firstarticlelink":"<a href=\"http://www.minnpost.com/politics-policy/2013/04/minneapolis-mayoral-candidate-don-samuels-q-i-will-be-very-outcome-oriented-\">MinnPost Q+A</a>","secondarticlelink":"","thirdarticlelink":"","rowNumber":4},{"candidatename":"Gary Schiff","occupation":"City Council Member","age":41,"neighborhood":"Corcoran","previouspoliticalofficesheld":"Minneapolis City Councilmember, Zoning and Planning Committee Chair","twitterhandle":"http://twitter.com/garyschiff","websiteurl":"http://www.garyschiff.com/","supportersandendorsements":"Rep. Karen Clark, Former state senate candidate Mohamud Noor, \nBirchwood Cafe owner Tracy Singleton, Restaurant owner Kim Bartmann, Minneapolis Fire Fighters, Local 82","whymayorquote":"<p>\"I believe that in America’s most progressive city, every neighborhood should make progress.</p>\n\n<p>Corporate profits are at an all-time high; workers wages, as a percentage of the Gross National Product, are at an all-time low. We need to be the city that creates a sustainable local economy that lifts people up, so that small businesses grow and neighborhoods grow stronger.</p>\n\n<p>The mayor can lead reform of red tape that keeps small businesses from taking off and can also help create jobs.</p>\n\n<p>One of the proposals I’m making is that the city require contractors to employ people who live in the city of Minneapolis. I believe that corporate welfare is an inefficient way to create jobs.\"</p>","biotext":"<p>Gary Schiff was first elected to the City Council in 2001 from Ward 9, which is south and east of downtown.</p>\n\n<p>Prior to his election, he co-authored a City Charter amendment that requires a public referendum on any proposal for a professional sports facility involving more than $10 million in public funding. The charter amendment was approved by 68 percent of voters.</p>\n\n<p>Schiff, 41, chairs the Zoning and Planning Committee and is a member of the Planning Commission.</p>","firstarticlelink":"<a href=\"http://www.minnpost.com/politics-policy/2013/04/minneapolis-mayoral-candidate-gary-schiff-q-tk\">MinnPost Q+A</a>","secondarticlelink":"","thirdarticlelink":"","rowNumber":5},{"candidatename":"Cam Winton","occupation":"Senior Counsel at Duke Energy Corporation","age":34,"neighborhood":"Fulton","previouspoliticalofficesheld":"None","twitterhandle":"https://twitter.com/cam_winton","websiteurl":"http://www.wintonformayor.org/","supportersandendorsements":"Former DFL congressional candidate Ashwin Madia, \nBill Manning and Ron Schutz of Robins, Kaplan, Miller & Ciresi","whymayorquote":"<p>\"I love this city. My wife and I have been fortunate to own a home in this city and raise our children in this city. There are so many things that are great about this city, but I think there is room for improvement.</p>\n\n<p>The open-seat mayor’s race, for the first time in 20 years, presents an opportunity for me to build on what is great about this city and bring a fresh set of eyes to the challenges we face.\"</p>","biotext":"<p>As a student, Cam Winton worked for John Kerry’s presidential campaign, came to Minneapolis as a “summer associate” for a law firm and came back to get married and start his career.</p>\n\n<p>He is a Democrat turned Republican but is not seeking endorsement from any political party.</p>\n\n<p>Winton, 34, a first-time candidate, is an attorney with a background in business.</p>\n\n<p>For those who are wonder if he is from the Minnesota Wintons, the answer is no. He has met members of that family, compared relatives with them and decided there is no immediate link.</p>","firstarticlelink":"<a href=\"http://www.minnpost.com/politics-policy/2013/04/winton\">MinnPost Q+A</a>","secondarticlelink":"","thirdarticlelink":"","rowNumber":6}]};

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