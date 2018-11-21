'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const findEvenIndex = require('../findEvenIndex');

describe('FindEvenIndex', () => {
  it('palindrome array [1,2,3,4,3,2,1] test', () => {
    assert.equal(findEvenIndex([1,2,3,4,3,2,1]),3);
  });

  it('negative array [1,100,50,-51,1,1]', () => {
    assert.equal(findEvenIndex([1,100,50,-51,1,1]),1);
  });

  it('Should return -1 on odd index count [1,2,3,4,5,6]', () => {
    assert.equal(findEvenIndex([1,2,3,4,5,6]),-1);
  });

  it('Double digits array [20,10,30,10,10,15,35]', () => {
    assert.equal(findEvenIndex([20,10,30,10,10,15,35]),3);
  });

  it('Double digits array [20,10,30,10,10,15,35]', () => {
    assert.equal(findEvenIndex([20,10,30,10,10,15,35]),3);
  });

  it('return NaN if input is not an array of numbers', function() {
    const badInputs = ['a', true, () => {}, 'a b c d -4', [], ['a', 'b', 'cat']];

    badInputs.forEach(function(input) {
      expect(function() {
        findEvenIndex(input).to.equal(NaN);
      });
    });
  });
});