/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  let obj = {} // create object

  for (i=0; i<array.length; i++) { // iterate over array with for loop
      if (obj[array[i]]) { // if element/key is a property of obj
        obj[array[i]] += 1; // add key-value pair to obj (if the same key-value pair, the value of it will keep increasing..in other words, this counts the duplicates)
      } else {
        obj[array[i]] = 1; // creates new property for element that's not part of obj and initializes to 1
      }
  }

  return obj
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
