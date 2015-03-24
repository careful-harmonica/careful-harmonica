'use strict'
if (typeof casper === 'undefined') {
  console.log('Starting casper');
  var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    onError: function(self, m) {
      console.log('onError', self, 'msg', m);
    }
  });
}
console.log(phantom);
phantom.clearCookies();

casper.on('remote.message', function(msg) {
  this.log('> ' + msg, 'debug');
});

var TEST_URL = 'http://localhost:9000/', TEST_FIREBASE = 'https://careful-harmonica.firebaseio.com/';


casper.test.begin('Landing page', function suite(test) {
  console.log('Opening landing page');
  casper.start(TEST_URL+'/#/land', function() {
    test.assertTitle('Jobby Roger', 'Page has correct title');
    // test.assertSelectorHasText("button[ng-click='enter()'] span", 'Sign up with Github / Log in');
    test.assertExists('nav', 'navbar exists');
  }).run(function() {
    test.done();
  });

});
