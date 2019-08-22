// Coding in function ```cutIt```, function accept 1 parameter:```arr```. ```arr``` is a string array.

// The first mission: Traversing ```arr```, find the shortest string length.

// The second mission: Traversing ```arr``` again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// ```
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
// ```

const arr1 = ["ab","cde","fgh"]
const arr2 = ["abc","defgh","ijklmn"]
const arr3 = ["codewars","javascript","java"]

module.exports = function cutIt(arr){
    // for loop that gets the length of each string, return the smallest length
    // so you need to find the min of the each 
    let min = arr[0].length
    for (let i = 0; i < arr.length; i++ ){
        //if the length on the current string is less than the current min, then set that length to the value of min
        if (arr[i].length < min){
            min = arr[i].length
        }
    }
    //map through the arr again and slice the strings using the minimum
    const map = arr.map( s => s.slice(0, min))
    return map
}

// cutIt(arr1)
// cutIt(arr2)
// cutIt(arr3)

// Alternative solution

//   function cutIt(arr){
//     const minLength = Math.min(...arr.map(x => x.length));
//     return arr.map(x => x.slice(0, minLength));
//   }