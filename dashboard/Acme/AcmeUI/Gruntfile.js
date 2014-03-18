'use strict';

var hbsfy = require('hbsfy').configure({
  extensions: ['html']
});

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      all: {
        files: ['src/main/**/*.*', 'src/test/**/*.*'],
        tasks: ['default']
      },
    },
    jshint: {
      all: ['Gruntfile.js', 'src/main/**/*.js', 'src/test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    clean: {
      foo: {
        src: ['target']
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/main/resources/',
        src: '**/*.*',
        dest: 'target/'
      },
      test: {
        expand: true,
        cwd: 'src/test/resources/',
        src: 'mocha.html',
        dest: 'target/'
      }
    },
    // browser tests (with phantomJS)
    mocha: {
      test: {
        src: ['target/mocha.html'],
        options: {
          reporter: 'Spec',
          run: true
        }
      }
    },
    mochaTest: {
      test: {
        src: ['src/test/js/**/*.js'],
        options: {
          reporter: 'spec'
        }
      }
    },
    browserify: {
      app: {
        src: 'src/main/js/app.js',
        dest: 'target/app.js',
        options: {
          transform: [hbsfy],
          // debug: true
        }
      },
      main: {
        src: 'src/main/js/app.js',
        // src: ['src/main/js/models/**/*.js', 'src/main/js/views/**/*.js'],
        dest: 'target/main.js',
        options: {
          transform: [hbsfy],
          aliasMappings: [{
            cwd: '.',
            src: 'src/main/js/**/*.js',
            dest: '.'
          }],
          // debug: true
        }
      },
      test: {
        src: ['src/test/js/**/*.js'],
        dest: 'target/test.js',
        options: {
          external: ['src/main/js/**/*.js'],
          // ignore: 'backbone'
        }
      }
    },
    uglify: {
      all: {
        files: {
          'dist/app_bundle_min.js': ['dist/app_bundle.js']
        }
      },
      main: {
        files: {
          'dist/app_bundle_main_min.js': ['dist/app_bundle_main.js']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['mochaTest', 'browserify', 'mocha']);
  // grunt.registerTask('default', ['jshint', 'jasmine_node', 'browserify', 'jasmine', 'uglify']);
};
