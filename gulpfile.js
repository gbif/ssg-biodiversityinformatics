var gulp = require('gulp'),
    gutil = require('gulp-util'),
    ssgTasks = require('gbif-ssg'); //for production
    // ssgTasks = require('../ssg/index.js'); //easier when developing the core. For testing only

global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

gulp.task('development', ssgTasks.developmentTask);

gulp.task('production', ssgTasks.productionTask);


//specifies the default set of tasks to run when you run `gulp`.
if (gutil.env.production) {
    gulp.task('default', ['production']);
} else {
    gulp.task('default', ['development']);
}