/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */

// Methods 1: Two Pointer Approach
//  Algorithm:
// Initialize two pointers before and after. In the implementation we have initialized these two with a dummy ListNode. This helps to reduce the number of conditional checks we would need otherwise. You can try an implementation where you don't initialize with a dummy node and see it yourself!
// Iterate the original linked list, using the head pointer.
// If the node's value pointed by head is lesser than x, the node should be part of the before list. So we move it to before list.
// Else, the node should be part of after list. So we move it to after list.
// Once we are done with all the nodes in the original linked list, we would have two list before and after. The original list nodes are either part of before list or after list, depending on its value.
// Now, these two lists before and after can be combined to form the reformed list.

// Time Complexity: O(N) - Where N is the number of nodes in the original linked list and we iterate the original list
// Space Complexity: O(1) - We have not utilized any extra space, the point to note is that we are transforming the orignal list by moving the original nodes. We have not used any extra space as such.
var partition = function (head, x) {
  let beforeHead = new ListNode(0);
  let before = beforeHead;
  let afterHead = new ListNode(0);
  let after = afterHead;

  while (head !== null) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }
  after.next = null;
  before.next = afterHead.next;
  return beforeHead.next;
};
// @lc code=end
