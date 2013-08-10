module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        BASE_PATH: '../',

        // Task configuration.
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: 'easeljs',
                    outdir: '<%= BASE_PATH %>' + 'docs',
                    themedir: '<%= BASE_PATH %>' + 'asDoc_theme',
                    exclude: ''
                }
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    // Default task.
    grunt.registerTask('default', ['yuidoc']);

};











