/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // convert the number to string
  const str = String(x);

  // left pointer at 0 index
  let left = 0;

  // right pointer at last index
  let right = str.length - 1;

  /* 
  While left < right check if element at left pointer is not equal to
  element at right pointer. If the condition is true, return false.
  Other wise increase left pointer by 1 and decrease right pointer by 1.
  */
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  /* 
  At this point, we have stepped out of while loop so, each element at
  pointer left is equal to each element at pointer right hence, it is a
  palindrome. Therefore, return true.
  */
  return true;
};
