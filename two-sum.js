/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // temporary object
  const temp = {};

  // iterating through nums array
  for (let i = 0; i < nums.length; i++) {
    // difference between target and current number in nums array
    const difference = target - nums[i];

    // if difference exists in temporary object
    if (difference in temp) {
      // return index of current number and the value of difference in temp object
      return [i, temp[difference]];
    } else {
      // otherwise save key as current number and value as current number's index in the temporary object
      temp[nums[i]] = i;
    }
  }

  // if we haven't returned an array up until now, it means that no such solution exists so, we return an empty array.
  return [];
};
