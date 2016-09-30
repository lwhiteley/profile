module.exports = grunt => {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      'gh-pages': {
        options: {
          base: 'dist'
        },
        src: ['**']
      }
    });
    grunt.registerTask('default', ['gh-pages']);
};
