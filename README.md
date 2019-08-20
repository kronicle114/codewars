# CodeWar Challenge 30 day challenge
Attempting to do a 30day codewar challenge everyday. Trying to write tests for them using mocha and chai.  

## Instructions
### change directory into a projects folder then clone this repo to your local machine
`cd projects`
`git clone https://github.com/kronicle114/codewar1.git`
### install dependencies
`npm install` 

## Day 1: High and Low  
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:
```javascript
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
## Notes:

* All numbers are valid Int32, no need to validate them.
* There will always be at least one number in the input string.
* Output string must be two numbers separated by a single space, and highest number is first.

## Day 2: Likes
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

```javascript
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
```

## Day 3: Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return `-1`.

For example:

Let's say you are given the array `{1,2,3,4,3,2,1}`:
Your function will return the index `3`, because at the 3rd position of the array, the sum of left side of the index `({1,2,3})` and the sum of the right side of the index `({3,2,1})` both equal `6`.

Let's look at another one.
You are given the array `{1,100,50,-51,1,1}`:
Your function will return the index `1`, because at the 1st position of the array, the sum of left side of the index `({1})` and the sum of the right side of the index `({50,-51,1,1})` both equal `1`.

Last one:
You are given the array `{20,10,-80,10,10,15,35}`
At index `0` the left side is `{}`
The right side is `{10,-80,10,10,15,35}`
They both are equal to `0` when added. (Empty arrays are equal to 0 in this problem)
Index `0` is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
An empty array should be treated like a 0 in this problem.

# Day 4: Methods of String object--slice(), substring() and substr()
