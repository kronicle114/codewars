'use strict';

// import chai, declare expect variable
const assert = require('chai').assert;
const likes = require('../likes');

/* Example tests */
describe('likes', () => {
  it('passed empty array test', () => {
    assert.equal(likes([]), 'no one likes this');
  });

  it('passed one name test', () => {
    assert.equal(likes(['Peter']), 'Peter likes this');
  });

  it('passed two names test', function() {
    assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
  });

  it('passed three names test', function() {
    assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });

  it('passed 4+ names test', function() {
    assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });

});