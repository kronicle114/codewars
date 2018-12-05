'use strict';

/* Merge the two arrays below by writing a fn so that the final answer looks like below:

[{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32,
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
},
{
  id: 'zYxWvUt',
  firstName: 'Alex',
  lastName: 'Smith',
  age: 24,
  occupation: 'receptionist',
  address: {
    street: '555 Ocean Ave',
    city: 'Beach City',
    Country: 'USA'
  }
}]

https://gist.github.com/alfaraday/89ce3718032b7e462424aad787e2d3f8
*/


const arr1 = [{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32
},
{
  id: 'zYxWvUt',
  firstName: 'Alex',
  lastName: 'Smith',
  age: 24
}];

const arr2 = 
[{
  id: 'aBcDeFgH',
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
},
{
  id: 'zYxWvUt',
  occupation: 'receptionist',
  address: {
    street: '555 Ocean Ave',
    city: 'Beach City',
    Country: 'USA'
  }
}];

function dataMergeStream(array1, array2) {
  const newObj1 = Object.assign(arr1[0],arr2[0]);

  const newObj2 = Object.assign(arr1[1],arr2[1]);

  const newArr = [newObj1, newObj2]
  console.log(newArr);
}

dataMergeStream(arr1, arr2);