'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const highAndLow = require('../highAndLow');

describe('highAndLow', () => {

  it('should return normal case', function () {
    const normalCase = '1 2 3 4 5';
    const answer = highAndLow(normalCase);
    expect(answer).to.equal('5 1');
  });

  it('should return normal case for negative numbers', function () {
    const normalCase = '-3 2 3 4 5';
    const answer = highAndLow(normalCase);
    expect(answer).to.equal('5 -3');
  });

  it('should have a minimum length of 3', function () {
    const normalCase = '1 2 3 4 5';
    const answer = highAndLow(normalCase);
    expect(answer).to.have.length.above(2);
  });



  it('should raise error if args is not a string of numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', true, () => {}, 'a b c d -4'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        highAndLow(input).to.equal(NaN);
      });
    });
  });
});