module.exports = function(grunt) {
  var timer = require("grunt-timer");
  timer.init(grunt);
  grunt.initConfig({
    files: {
      js: {
        src: ["app/2_js/main.js", "app/2_js/**/*.js"],
        vendors: ["bower_components/jquery/dist/jquery.js"],
      },
      assets: {
        templates: "app/1_templates/",
        images: "app/4_images/",
        fonts: "app/6_fonts/"
      }
    },
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'extended',
        includePaths: ['bower_components/compass-mixins/lib/', 'bower_components/susy/sass/', 'app/3_sass']
      },
      dist: {
        files: [{

          expand: true, // Enable dynamic expansion.
          cwd: 'app/3_sass/', // Src matches are relative to this path.
          src: ['**/*.scss'], // Actual pattern(s) to match.
          dest: 'tmp/css', // Destination path prefix.
          ext: '.css', // Dest filepaths will have this extension.
          extDot: 'first' // Extensions in filenames begin after the first dot
        }, ],
      }
    },
    sync: {
      images: {
        files: [{
          cwd: '<%= files.assets.images %>',
          src: ['**'],
          dest: 'generated/static/images'
        }],
        verbose: true
      },
      templates: {
        files: [{
          cwd: '<%= files.assets.templates %>',
          src: ['**'],
          dest: 'generated/static/'
        }],
        verbose: true
      },
      fonts: {
        files: [{
          cwd: '<%= files.assets.fonts %>',
          src: ['**'],
          dest: 'generated/static/fonts'
        }],
        verbose: true
      }
    },
    uglify: {
      generated: {
        options: {
          mangle: {
            except: ['jQuery']
          },
          sourceMap: true,
          sourceMapName: 'generated/static/sourcemap.map',
          sourceMapIncludeSources: true
        },
        src: ["<%= files.js.vendors %>", "<%= files.js.src %>"],
        dest: "generated/static/js/app.min.js"
      }
    },
    'http-server': {
      static: {
        // the server root directory
        root: 'generated/static',
        port: 8082,
        // port: function() { return 8282; }
        host: "127.0.0.1",
        cache: 60,
        showDir: true,
        autoIndex: true,
        // server default file extension
        ext: "html",
        // run in parallel with other tasks
        runInBackground: true
      }

    },
    'compile-handlebars': {
      globalTemplate: {
        template: 'app/1_templates/pages/**/*.hbs',
        templateData: 'app/1_templates/datas/pages/**/*.json',
        output: 'tmp/*.html',
        partials: 'app/1_templates/partials/**/*.hbs',
        registerFullPath:false,
          globals: [
            'app/1_templates/datas/globals.json'
          ]
      }
    },
    multi_pages_assets_generator: {
      options: {
        jsFolder: 'app/2_js',
        jsComponents :'bower_components',
        cssFolder: 'tmp/css',
        configJSON: 'config.json'
      },
      files: {
        src: 'tmp',
        dest: 'generated/static'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      templates: {
        files: ["<%= files.assets.templates %>/**/*.hbs"],
        tasks: ["compile-handlebars","multi_pages_assets_generator"]
      },
      js: {
        files: ["<%= files.js.src %>"],
        tasks: ["newer:uglify:generated","multi_pages_assets_generator"]
      },
      sass: {
        files: ["app/3_sass/**/*.scss"],
        tasks: ["sass:dist","multi_pages_assets_generator"]
      }
    }
  });
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['compile-handlebars:globalTemplate','sass:dist', 'multi_pages_assets_generator', 'sync:images', 'sync:fonts', 'http-server', 'watch']);
}
