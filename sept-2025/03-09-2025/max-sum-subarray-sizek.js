// 1. **Maximum Sum Subarray of Size K**

//     Find the maximum sum of a subarray with size k.

function maxSum(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let max = sum;
  for (let i = 1; i <= arr.length - k; i++) {
    sum = sum - arr[i - 1] + arr[i + k - 1];
   
    max = Math.max(max, sum)
     console.log("max", max);
  }
  return max;
}

console.log(maxSum([3, 8, 2, 5, 7, 6, 12], 3));
