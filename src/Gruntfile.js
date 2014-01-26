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
      built: {
        files: [{
          expand: false,
          src: ['bower_components/jquery/jquery.js',
                'bower_components/jquery-ui/ui/jquery.ui.effect*.js',
                'bower_components/bootstrap/js/*.js',
                'assets/js/start.js'],
          dest: 'assets/js/built.min.js'
        }]
      },
      swipebox: {
        files: {
          'assets/js/jquery.swipebox.min.js': 'bower_components/swipebox/source/jquery.swipebox.js'
        }
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
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'less', 'uglify', 'copy', 'exec:build' ]);
  grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};