module.exports = function(grunt) {
  var timer = require("grunt-timer");
  timer.init(grunt);
  grunt.initConfig({
    files: {
      js: {
        src: ["app/js/nav-voo.js"],
        vendors: ["bower_components/jquery/dist/jquery.js"],
      },
      assets: {}
    },
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'extended',
        includePaths: ['bower_components/compass-mixins/lib/', 'bower_components/susy/sass/', 'app/sass']
      },
      dist: {
        files: [{

          expand: true, // Enable dynamic expansion.
          cwd: 'app/sass/', // Src matches are relative to this path.
          src: ['**/*.scss'], // Actual pattern(s) to match.
          dest: 'generated/static/css', // Destination path prefix.
          ext: '.css', // Dest filepaths will have this extension.
          extDot: 'first' // Extensions in filenames begin after the first dot
        }],
      }
    },
    sync: {
      html: {
        files: [{
          cwd: 'app/',
          src: ['*.html'],
          dest: 'generated/static/'
        }],
        verbose: true
      },
      images: {
        files: [{
          cwd: 'app/images/',
          src: ['*.*'],
          dest: 'generated/static/images/'
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
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ["<%= files.js.src %>"],
        tasks: ["uglify"]
      },
      html: {
        files: ["app/index.html"],
        tasks: ["sync:html"]
      },css: {
        files: ["app/css/**/*.css"],
        tasks: ["sync:css"]
      }
    }
  });
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['uglify','sass:dist' ,'sync:html','sync:images','http-server', 'watch']);
}
