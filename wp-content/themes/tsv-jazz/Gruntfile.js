module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        sass: {
            dist: {
                options: {
                    sourcemap: false,
                    compress: false,
                    yuicompress: false,
                    style: 'expanded',
                },
                files: {
                    'sass/custom/grunt/custom_styles.css': 'sass/custom/custom_styles.scss'
                }
            },
        },


        concat: {

            options: {
                stripBanners: true
            },
            dist: {
               
                src: ['sass/custom/grunt/style_archive.css', 'sass/custom/grunt/custom_styles.css'],
                dest: 'style.css'
            }
        },


        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'concat']
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}