var should = require('should');
var fs = require('fs');
var rewriteCssUrls = require('../');

function fixture (name) {
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('rewriteCssUrls(css, fn)', function () {
  it('should rewrite urls', function () {
    function rewrite (url) {
      return 'http://example.com' + url;
    }

    rewriteCssUrls(fixture('url'), rewrite)
      .should.equal(fixture('url.out'));
  });
});

describe('rewriteCssUrls(css, fn) spaces inside parentheses', function () {
  it('should rewrite urls', function () {
    function rewrite (url) {
      return 'http://example.com' + url;
    }

    rewriteCssUrls(fixture('url.spaces'), rewrite)
      .should.equal(fixture('url.out'));
  });
});
