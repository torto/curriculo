module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      dist: {
        files: ['public/**/*'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.registerTask('watch', ['watch']);
  grunt.loadNpmTasks('grunt-contrib-watch');
};
