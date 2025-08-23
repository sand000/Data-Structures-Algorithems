// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2

// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

var missingNumber = function (nums) {
  let sum = nums.reduce((acc, e) => acc + e, 0);
  let n = nums.length;
  let actualSum = (n * (n + 1)) / 2;
  let missingNumber = actualSum - sum;
  return missingNumber;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));
