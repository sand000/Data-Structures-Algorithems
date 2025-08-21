// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".


// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0


var numJewelsInStones = function (jewels, stones) {
  let obj1 = isMap(jewels);
  let obj2 = isMap(stones);

  let count = 0;
  for (key in obj1) {
    if (obj2[key] !== undefined) {
      count += Number(obj2[key]);
    }
  }
  return count;
};

function isMap(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  return obj;
}

console.log(numJewelsInStones())
