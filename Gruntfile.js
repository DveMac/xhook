/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= pkg.url %>\n' +
      '* <%= pkg.author %> - <%= pkg.licence %> */\n\n',
    // Task configuration.
    coffee: {
      compile: {
        files: {
          'src/<%= pkg.name %>.js': 'src/xhook.coffee'
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/1/<%= pkg.name %>.min.js'
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/1/<%= pkg.name %>.js'
      }
    },

    watch: {
      default: {
        files: 'src/*.coffee',
        tasks: ['coffee','concat', 'uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', ['coffee', 'concat', 'uglify']);

};
