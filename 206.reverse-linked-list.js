/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time Complexity: O(n), assume n is the list's length, the time complexity is O(n)
// Space Complexity: O(1)
// var reverseList = function (head) {
//   let prev = null;
//   let curr = head;
//   while (curr !== null) {
//     let nextTemp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = nextTemp;
//   }
//   return prev;
// };

// Method 2 Recursion:
// Time Complexity: O(n) - n is the length of the list's length, and the time complexity is O(n)
// Space Complexity: O(n) - The extra space comes from implicit stack space due to recursion. The recursion can go up to n levels deep.
var reverseList = function (head) {
  if (head === null || head.next == null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

// @lc code=end
