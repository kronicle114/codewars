'use strict';

module.exports = function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    const remainder = names.length - 2;
    return `${names[0]}, ${names[1]} and ${remainder} others like this`;
  } else {
    console.log('Please enter an array of names');
  }
}

// likes([]);
// likes(['Peter']);
// likes(['Peter', 'Wendy']);
// likes(['Peter', 'Wendy', 'Tinker Bell']);
// likes(['Peter', 'Wendy', 'Tinker Bell', 'Lost Boys', 'John']);

/* REFACTOR */
// function likes(names) {
//   names = names || [];
//   switch(names.length){
//   case 0: return 'no one likes this'; break;
//   case 1: return names[0] + ' likes this'; break;
//   case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//   case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//   default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }