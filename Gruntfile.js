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
        grunt.loadNpmTasks('grunt-contrib-uglify');
}

