module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/less",
            "bower_components/swipebox/source/"],
          yuicompress: true
        },
        files: {
          "assets/css/styles.min.css": "assets/_less/styles.less"
        }
      }
    },
    uglify: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
        }
      },
      jquery_ui: {
        files: {
          'assets/js/jquery-ui.min.js': ['bower_components/jquery-ui/ui/jquery.ui.effect*.js']
        }
      },
      bootstrap: {
        files: {
          'assets/js/bootstrap.min.js': [
            'bower_components/bootstrap/js/affix.js',
            'bower_components/bootstrap/js/alert.js',
            'bower_components/bootstrap/js/button.js',
            'bower_components/bootstrap/js/carousel.js',
            'bower_components/bootstrap/js/collapse.js',
            'bower_components/bootstrap/js/dropdown.js',
            'bower_components/bootstrap/js/modal.js',
            //'bower_components/bootstrap/js/popover.js',
            'bower_components/bootstrap/js/scrollspy.js',
            'bower_components/bootstrap/js/tab.js',
            'bower_components/bootstrap/js/tooltip.js',
            'bower_components/bootstrap/js/transition.js'
          ]
        }
      },
      swipebox: {
        files: {
          'assets/js/jquery.swipebox.min.js': 'bower_components/swipebox/source/jquery.swipebox.js'
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/js/jquery.min.js',
          'assets/js/jquery-ui.min.js',
          'assets/js/bootstrap.min.js'],
        dest: 'assets/js/built.js'
      }
    },
    copy: {
      bootstrap: {
        nonull: true,
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'assets/fonts/'}
        ]
      },
      swipebox: {
        nonull: true,
        files: [
          {expand: true, cwd: 'bower_components/swipebox/source/img/', src: '**', dest: 'assets/css/img/'}
        ]
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      },
      deploy: {
        cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'less', 'uglify', 'concat', 'copy', 'exec:build' ]);
  grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};