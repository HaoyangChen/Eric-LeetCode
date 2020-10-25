/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// Since we don't have access to the node before the one we want to delete, we cannot modify the next pointer of that node in any way.
// Instead, we have to replace the value of the node that we want to delete with the value in the node after it, and then delete the node after it.
// Time Complexity: O(1)
// Space Complexity: O(1)
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
// @lc code=end
