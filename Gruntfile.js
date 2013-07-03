module.exports = function (grunt) {
        grunt.initConfig({
            uglify: {
                jslock: {
                    files: {
                        'lock.min.js': ['lock.js']
                    }
                }
            }
        });
        grunt.registerTask('default', ['uglify']);
        grunt.loadNpmTasks('grunt-contrib-uglify');
}

