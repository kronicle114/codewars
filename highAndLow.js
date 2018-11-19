'use strict';

module.exports = function highAndLow(numbers){
  const myNum = numbers.split(' ');
  return `${Math.max(...myNum)} ${Math.min(...myNum)}`;
};