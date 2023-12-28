/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    } else {
      currentCount += 1;
    }
  }

  return Math.max(currentCount, maxCount);
};
