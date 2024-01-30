/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // initialize pointer k at 0
  let k = 0;

  // initialize pointer i at 0
  for (let i = 0; i < nums.length; i++) {
    // if the value at pointer i is not equal to val
    if (nums[i] !== val) {
      // set the value at pointer k equal to the value at pointer i
      nums[k] = nums[i];
      // increase k by 1
      k++;
    }
  }

  // return k
  return k;
};
