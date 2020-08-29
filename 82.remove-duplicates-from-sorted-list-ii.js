/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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

// Method: Double Pointers
// Time Complexity: O(n)
// Space Complexity: O(1) ???
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let a = dummy;
  let b = head;
  while (b !== null && b.next !== null) {
    if (a.next.val !== b.next.val) {
      a = a.next;
      b = b.next;
    } else {
      while (b !== null && b.next !== null && a.next.val === b.next.val) {
        b = b.next;
      }
      a.next = b.next;
      b = b.next;
    }
  }
  return dummy.next;
};
// @lc code=end
