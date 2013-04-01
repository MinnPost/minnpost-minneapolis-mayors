/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    jshint: {
      files: ['Gruntfile.js', 'js/*.js']
    },
    clean: {
      folder: 'dist/'
    },
    jst: {
      compile: {
        options: {
          namespace: 'mpApp.templates'
        },
        files: {
          'dist/templates.js': ['js/app/templates/*.html']
        }
      }
    },
    concat: {
      dist: {
        src: ['js/app/app.js'],
        dest: 'dist/<%= pkg.name %>.<%= pkg.version %>.js'
      },
      dist_latest: {
        src: '<config:concat.dist.src>',
        dest: 'dist/<%= pkg.name %>.latest.js'
      },
      libs: {
        src: ['lib/jquery-1.9.1.min.js', 'lib/underscore-1.4.4.min.js', 'lib/backbone-1.0.0.min.js'],
        dest: 'dist/<%= pkg.name %>.libs.js',
        separator: ';\r\n\r\n'
      },
      /*
      css_libs: {
        src: ['css/lib/jquery.qtip.master-20130221.css'],
        dest: 'dist/<%= pkg.name %>.libs.css',
        separator: '\r\n\r\n'
      }
      */
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: ['<%= concat.dist.dest %>'],
        dest: 'dist/<%= pkg.name %>.<%= pkg.version %>.min.js'
      },
      dist_latest: {
        src: ['<%= concat.dist_latest.dest %>'],
        dest: 'dist/<%= pkg.name %>.latest.min.js'
      }
    },
    copy: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.<%= pkg.version %>.css': 'css/style.css',
          'dist/<%= pkg.name %>.<%= pkg.version %>.ie.css': 'css/style.ie.css'
        }
      },
      dist_latest: {
        files: {
          'dist/<%= pkg.name %>.latest.css': 'css/style.css',
          'dist/<%= pkg.name %>.latest.ie.css': 'css/style.ie.css'
        }
      },
      images: {
        files: {
          'dist/images/': 'css/images/*'
        }
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        _: true,
        Backbone: true,
        mpApp: true
      }
    },
    s3: {
      // This is specific to MinnPost
      //
      // These are assumed to be environment variables
      // See https://npmjs.org/package/grunt-s3
      //key: 'YOUR KEY',
      //secret: 'YOUR SECRET',
      bucket: 'data.minnpost',
      access: 'public-read',
      upload: [
        {
          src: 'dist/*',
          dest: 'projects/<%= pkg.name %>/'
        },
        {
          src: 'dist/images/*',
          dest: 'projects/<%= pkg.name %>/images/'
        }
      ]
    }
  });
  
  // Load plugin tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.loadNpmTasks('grunt-s3');

  // Default task.
  grunt.registerTask('default', ['jshint', 'clean', 'jst', 'concat', 'uglify', 'copy']);
  grunt.registerTask('mp-deploy', ['s3']);

};
