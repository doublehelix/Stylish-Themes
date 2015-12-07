var config = module.exports = {

    //================================================//
    // CLEAN                                          //
    //================================================//
    clean: {
        options: { force: true },
        dist: {
            src: [
                "<%= project.paths.dist %>/**"
            ]
        }
    },

    //================================================//
    // LESS                                           //
    //================================================//
    less: {
        dist: {
            options: {
                compress: false,
                ieCompat: true,
                sourceMap: true,
                //sourceMapFilename: "<%= project.paths.dist %>/style.css.map",
                //sourceMapBasepath: "<%= project.paths.dist %>/",
                //sourceMapURL: "./style.css.map"
            },
            files: [
                {
                    expand: true,
                    cwd: "<%= project.paths.source %>",
                    src: ['*.less'],
                    dest: "<%= project.paths.dist %>",
                    ext: '.css'
                }
            ]
        }
    },

    //================================================//
    // CSSMIN                                         //
    //================================================//
    cssmin: {
        generated: {
            options: {
                keepSpecialComments: 0
            }
        }
    },

    //================================================//
    // REPLACE                                        //
    //================================================//
    replace: {
        dist: {
            src: [
                '<%= project.paths.dist %>/*.css'
            ],
            overwrite: true,
            replacements: [{
                from: '../dist/',
                to: './'
            }]
        }
    }
};
