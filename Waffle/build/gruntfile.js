module.exports = function(grunt) {
    // Use this and no need to add grunt.loadNpmTasks to every line
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Base Config
    var config = {
        pkg: grunt.file.readJSON('./package.json'),

        project: {
            buildDate: '<%= grunt.template.today("yyyymmdd") %>',
            buildId: '<%= pkg.version %>', //.<%= grunt.template.today("yyyymmddHHMM") %>',
            names: {
                dist:   'dist',
                src:    'less'
            },
            paths: {
                base:   './..',
                source: './../less',
                temp:   './../temp',
                dist:   './../dist'
            }
        },

        env: process.env
    };

    config.project.paths.build = config.project.paths.release +'/'+ config.project.buildId;

    grunt.initConfig(config);

    // Load the Tasks
    require('load-grunt-tasks')(grunt);

    // Load all our custom tasks
    grunt.loadTasks('grunt_tasks');

    // Load all our custom tasks config and merge into main config
    grunt.file.expand('./grunt_tasks/config/*.js').forEach(function (file) {
        var cfg = require(file);
        grunt.config.merge(cfg);
    });
};
