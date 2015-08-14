#!/usr/bin/env node

/**
 * This tiny wrapper file checks for known node flags and appends them
 * when found, before invoking the "real" _mocha(1) executable.
 */

var spawn = require('child_process').spawn,
  path = require('path'),
  fs = require('fs'),
  args = [path.join(__dirname, 'raceImmediateVSTimeout')];

for (var i = 0; i < 10000;i++) {
  var proc = spawn(process.execPath, args, { stdio: 'inherit' });

/*
  proc.on('exit', function (code, signal) {
    process.on('exit', function(){
     if (signal) {
       process.kill(process.pid, signal);
     }
     else {
      process.exit(code);
      }
    });
  });
*/
}

// terminate children.
process.on('SIGINT', function () {
  proc.kill('SIGINT'); // calls runner.abort()
  proc.kill('SIGTERM'); // if that didn't work, we're probably in an infinite loop, so make it die.
  process.kill(process.pid, 'SIGINT');
});
