var Suite = require('benchmark').Suite
var fs = require('fs')

var suite = new Suite

console.log(deffered);

return;
suite.add('deffered.resolve()', function(deferred) {
  deferred.resolve()
}, {defer: true})

suite.add('setImmediate()', function(deferred) {
  setImmediate(function() {
    deferred.resolve()
  })
}, {defer: true})

suite.add('setTimeout(,0)', function(deferred) {
  setTimeout(function() {
    deferred.resolve()
  },0)
}, {defer: true})

suite
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({async: true})