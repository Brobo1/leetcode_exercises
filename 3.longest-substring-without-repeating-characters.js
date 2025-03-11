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

// let test = "abcabcbb"
// let test = "bbbbb"
let test = "pwwkew";

let lengthOfLongestSubstring = function (s) {
  for (const sKey of s) {
    console.log(sKey);
  }
};

lengthOfLongestSubstring(test);
// @lc code=end
