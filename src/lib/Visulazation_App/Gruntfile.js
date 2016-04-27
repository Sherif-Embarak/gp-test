module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    coffee: {
      source: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.coffee'],
        options: {
          bare: true
        },
        dest: 'dist/',
        ext: '.js'
      }
    },
    watch: {
      test: {
        files: ["src/**/*.coffee", "<%= mochaTest.all.src %>"]
      },
      options: {
        spawn: false
      }
    },
    mochaTest: {
      all: {
        options: {
          reporter: 'spec',
          clearRequireCache: true,
          timeout: 5000,
          ui: 'bdd',
          require: 'coffee-script/register',
          compilers: 'coffee:coffee-script/register'
        },
        src: ['test/**/*.coffee']
      }
    }
  });
  grunt.event.on('watch', function(action, filepath) {
    grunt.config('mochaTest.all.src', [filepath]);
    return grunt.task.run("mochaTest");
  });
  grunt.registerTask("default", ["watch"]);
  return grunt.registerTask("build", ["coffee:source"]);
};

//# sourceMappingURL=Gruntfile.js.map
