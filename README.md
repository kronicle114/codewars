# CodeWar Challenge Day 1
Attempting to do a 30day codewar challenge everyday. Trying to write tests for them using mocha and chai.  

## Instructions
### change directory into a projects folder then clone this repo to your local machine
`cd projects`
`git clone https://github.com/kronicle114/codewar1.git`
### install dependencies
`npm install` 

## Drill 
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
