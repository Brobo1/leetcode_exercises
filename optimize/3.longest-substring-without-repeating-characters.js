/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

let lengthOfLongestSubstring = function (s) {
  let list = [];

  for (let i = 0; i < s.length; i++) {
    let list2 = [];
    for (const sKey of s.slice(i)) {
      if (list2.includes(sKey)) {
        break;
      }
      list2.push(sKey);
    }
    if (list2.length > list.length) {
      list = list2;
    }
  }
  return list.length;
};
// @lc code=end
