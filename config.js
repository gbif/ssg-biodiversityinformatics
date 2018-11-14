/*
 Build configurations specifying where various folders are located and build to.
 This is not intended to be modified by editors
 */
var src = './src';

module.exports = {
    javascript: {
        src: ['./bower_components/gbif-ssg/bower_build/script.js',
            src + '/js/**/*.js']
    },
    stylus: {
        entries: [src + '/stylus/index.styl']
    },
    fonts: {
        iconsSrc: ['./bower_components/gbif-ssg/bower_build/icons/**/*.svg', src + '/icons/**/*.*'],
        template: './bower_components/gbif-ssg/bower_build/icons/fonttemplate.styl'
    },
    googleAnalyticsId: 'UA-42057855-2'
};
