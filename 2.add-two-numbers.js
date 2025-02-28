/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
	let list = []
	let s1 = ""
	let s2 = ""
	while (l1.length || l2.length) {
		s1 += l1.pop()
		s2 += l2.pop()
	}
	let total = (parseInt(s1) + parseInt(s2)).toString().split("")
	while (total.length) {
		list.push(parseInt(total.pop()))
	}
	return list
};

// @lc code=end

