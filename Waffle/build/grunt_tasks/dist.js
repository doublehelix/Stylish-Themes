module.exports = function (grunt) {
    grunt.registerTask('dist', 'Performs a public build', function (target) {

        target = target || 'dev';

        if (target === 'dev') {
            grunt.task.run('clean:dist');
            grunt.task.run('less:dist');
            // grunt.task.run('replace:dist');
        }
    });
};
