/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



/*
// brute force
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
}
*/


/*
// two pass hash table
const twoSum = function (nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], i)
	}
	
	for (let i = 0; i < nums.length; i++) {
		const x = target - nums[i]
		if (map.get(x) && map.get(x) !== i) {
			return [i, map.get(x)]
		}
	}
};
*/

// one pass hash table
const twoSum = function (nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const x = target - nums[i]
		if (map.has(x)) {
			return [map.get(x), i]
		}
		map.set(nums[i], i)
	}
};
// @lc code=end

