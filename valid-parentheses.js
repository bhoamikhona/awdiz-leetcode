/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // initialize empty stack
  stack = [];

  // setting key value pairs for all the bracket types in hashmap
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  // for each character in the string s
  for (const char of s) {
    // if character is in hashmap, push the character in the stack
    // and continue to next iteration
    const isBracket = char in map;
    if (!isBracket) {
      stack.push(char);
      continue;
    }

    // if the last element in the stack is equal to the value of char in hashmap
    // pop the last element from the stack
    // continue to the next iteration
    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
      continue;
    }

    // this will return false because there are no matching brackets in the stack
    return false;
  }

  // this will return true if the stack is empty, otherwise it will return false
  return stack.length === 0;
};
