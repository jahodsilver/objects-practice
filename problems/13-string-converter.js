/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let obj = {}

  for (char=0; char<string.length; char++) {
    if (obj[string[char]]) { // if element/key is a property of obj
      obj[string[char]] += 1; // add key-value pair to obj (if the same key-value pair, the value of it will keep increasing..in other words, this counts the duplicates)
    } else {
      obj[string[char]] = 1; // creates new property for element that's not part of obj and initializes to 1
    }
}

return obj
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
