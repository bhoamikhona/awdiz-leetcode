/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // initialize left pointer to 0
  let left = 0;
  // initialize right pointer to the last element of nums
  let right = nums.length - 1;

  // initialize empty array for result
  let result = [];

  // while the left pointer is less than equal to right pointer
  while (left <= right) {
    // square the number at the left pointer
    const squareLeft = nums[left] ** 2;
    // sqaure the number at the right pointer
    const squareRight = nums[right] ** 2;

    // if the squared value at right pointer is greater than the
    // squared value at left pointer
    if (squareRight > squareLeft) {
      // insert the value at the right pointer at the beginning of the array
      // this is because the resulting array should be in ascending order
      result.unshift(squareRight);
      // decrease the right pointer by 1
      right -= 1;
    } else {
      // otherwise, insert the value at the left pointer at the beginning
      // of the array
      result.unshift(squareLeft);
      // increase the left pointer by 1
      left += 1;
    }
  }

  // return the resulting array
  return result;
};
