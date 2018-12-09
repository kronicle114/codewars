'use strict';

/* ======== Merging an array of objects ======= 
  https://gist.github.com/alfaraday/89ce3718032b7e462424aad787e2d3f8

  resources: 
  https://zellwk.com/blog/looping-through-js-objects/
  https://www.linkedin.com/pulse/javascript-filter-function-examples-rafael-mariano-de-oliveira/

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

/* DATA MERGE STREAM: ES6 spread operator, object destructuring, and filter */

const dataMergeStream = (array1, array2) => {

  //merge all data in an array
  const mergedArray = [...array1, ...array2];

  const ids = mergedArray.map( obj => obj.id );
  // console.log(ids);

  const uniq = (a) => {
    return a.sort().filter( (item, pos, ary) => {
      return !pos || item !== ary[pos - 1];
    });
  };

  const reducedIds = uniq(ids);

  // console.log('reducedIds',reducedIds);
  const id1 = mergedArray.filter( obj => obj.id === reducedIds[0] );
  const id2 = mergedArray.filter( obj => obj.id === reducedIds[1] );
  /*   console.log(filterById); */

  const [ item1 , newitem1 ] = id1;
  const [ item2 , newitem2 ] = id2;
  const mergedData1 = Object.assign(item1 , newitem1);
  const mergedData2 = Object.assign(item2 , newitem2);

  //set it equal to a new array
  const newArr = [ mergedData1, mergedData2 ];
  console.log(newArr);
  
};

dataMergeStream(arr1, arr2);


// /* DATA MERGE: ES6 spread operator, object destructuring, and filter */

// const dataMerge = (id, array1, array2) => {

//   //grab all objects in the array and filter it by id
//   const mergedArray = [...array1, ...array2];
//   const filterById = mergedArray.filter( obj => obj.id === id);
  
//   //we're gonna use Object.assign to merge all prop in a new object, this gets rid of all duplication
//   const [ Array1 , Array2 ] = filterById; 
//   /* console.log('mergedArray', mergedArray); */

//   const mergedData = Object.assign(Array1, Array2);

//   //set it equal to a new array
//   const newArr = [ mergedData ];
//   console.log(newArr);
// };

// dataMerge('aBcDeFgH',arr1, arr2);
// dataMerge('zYxWvUt',arr1, arr2);


/* ======= direct solution  ======= */
// const dataMergeStream = (array1, array2) => {
//   const newObj1 = Object.assign(array1[0],array2[0]);
//   const newObj2 = Object.assign(array1[1],array2[1]);

//   const newArr = [newObj1, newObj2];
//   console.log(newArr);
// };

// dataMergeStream(arr1, arr2);

//solution above doesn't take into acct the object's id & is not maintainable

/* ======= refactor solution  ======= */

// 1) identify by id
// 2) merge using spread or object.assign

//using ES6 obj destructuring and the spread operator, make the id of each obj in the array iterable
// const [ obj1, obj2 ] = [...arr1];
// const [ newObj1, newObj2 ] = [...arr2];

// console.log('obj1: ', obj1);
// console.log('obj1.id: ', obj1.id);
// console.log('obj2: ', obj2);
// console.log('newObj1: ', newObj1);
// console.log('newObj1.id: ', newObj1.id);
// console.log('newObj2: ', newObj2);

// const dataMergeStream = (Obj, newObj) => {
//   if (Obj.id === newObj.id ) {
//     console.log(`object's id ${Obj.id} is the same as new object's id ${newObj.id}`);
//   }
// };

// dataMergeStream(obj1, newObj1);

// //param is 2 arrays, 
// const dataMergeStream = (array1, array2 ) => {

//   const [ obj1, obj2 ] = [...array1];
//   const [ newObj1, newObj2 ] = [...array2];

//   //you could probably do a forEach here, or a filter
//   if (obj1.id === newObj1.id || obj2.id === newObj2.id ) {
//     console.log(`object's id ${obj1.id} is the same as new object's id ${newObj1.id}`);
//   }

// };

// dataMergeStream(arr1, arr2);

// /* 

// 1. do a find on each array & compare ids
// 2. if ids are the same then merge them

// */
// const dataMergeStream = (array1, array2 ) => {

//   const [ obj1, obj2 ] = [...array1];
//   const [ newObj1, newObj2 ] = [...array2];

//   //you could probably do a forEach here, or a filter
//   if (obj1.id === newObj1.id || obj2.id === newObj2.id ) {
//     const mergedObj = Object.assign(obj1, newObj1); 
//     console.log(mergedObj);
//     return mergedObj;
//   }
// };

// dataMergeStream(arr1, arr2);


/* 

1. do a find on each array & compare ids
2. if ids are the same then merge them

*/

// let obj = arr1.find( obj => obj.id === 'aBcDeFgH' );
// console.log(obj);

// const dataMergeStream = (array1, array2) => {
//   const [ obj1, obj2] = [...array1 ];
//   const [ newObj1, newObj2 ] = [...array2 ];

//   const nArray = [...array1, ...array2];

//   array1.find( obj => {
//     if (obj.id === newObj1.id ) {
//       const mergedObj1 = Object.assign(obj, newObj1); 
//       console.log('mergedObj', mergedObj1);
//     }
//   });
  
//   array2.find( obj => {
//     if (obj.id === newObj2.id ) {
//       const mergedObj2 = Object.assign(obj, newObj2); 
//       console.log('mergedObj2', mergedObj2);
//     }
//   });

// };

// dataMergeStream(arr1, arr2);

// let obj = arr1.find( obj => obj.id === 'aBcDeFgH' );
// console.log(obj);

// const dataMergeStream = (array1, array2) => {
//   const mergedArray = [...array1, ...array2];
//   console.log(mergedArray);

//   for (const key of mergedArray ) {
//     console.log(key.id);
//   }

// };

// dataMergeStream(arr1, arr2);

