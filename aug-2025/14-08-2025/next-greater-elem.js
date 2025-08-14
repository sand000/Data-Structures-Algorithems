// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]

var nextGreaterElement = function (nums1, nums2) {
  let ans = [];

  for (let i = 0; i < nums1.length; i++) {
    let next = -1;
    let start = nums2.indexOf(nums1[i]);

    for (let j = start + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        next = nums2[j];
        break;
      }
    }
    ans.push(next);
  }
  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
