/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = []
		let i = 0;
		let j = 0;

		while(i < nums1.length && j < nums2.length) {
			if (nums1[i] > num2[j]) {
				merged.push(nums1[i])
				i++
			} else {
				merged.push(nums2[j])
				j++
			}
		}
};
// @lc code=end

