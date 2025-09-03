var numberOfSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let bag = "";
    for (let j = i; j < s.length; j++) {
      bag += s[j];
      console.log("bag", bag);
      if (bag.includes("a") && bag.includes("b") && bag.includes("c")) {
        count++;
      }
    }
  }
  return count;
};
