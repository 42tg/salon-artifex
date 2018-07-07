var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

var gulp = require('gulp')
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

var files = [
    './**/**/*.*',
    //'!./**/**/*.map'
]
var remotePath = '.';
gulp.task('deploy', function() {
  
  var conn = ftp.create({
    host: args.host,
    user: args.user,
    password: args.password,
    log: gutil.log,
    parallel: 1,
    idleTimeout: 10000
  });
  conn.rmdir('static/', () => {

  gulp.src(files ,{ base: './build', cwd: './build', buffer: false } )
    //.pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
  })
});