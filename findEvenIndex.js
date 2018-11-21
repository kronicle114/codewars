'use strict';

module.exports = function findEvenIndex(arr)
{
  let arrSum = 0; 
  let leftSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i]; //find the sum of the whole array
  } 

  for (let i = 0; i < arr.length; i++){
    arrSum -= arr[i]; //at index i, this is the right sum

    if (leftSum === arrSum) {
      return i;
    }

    leftSum += arr[i]; //otherwise, update leftSum to add at the current value of the array
  }
  return -1; //if no equal value at given index, return -1
};

/* 
We're finding the total array sum first. Then we have a variable leftSum which starts a value at zero. We'll keep iterating through the array and keep updating the leftSum value. Once the leftSum and arrSum are equal, then return the index denoted by i. Otherwise return -1.

FYI this took me an hour+ to figure out. 
*/