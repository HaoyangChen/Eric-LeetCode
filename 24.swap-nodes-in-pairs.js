/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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

// Method 1: Recursion
// Time Complexity: O(n) - n is the number of nodes in the linkedlist
// Space Complexity: O(n) - space cost by recursion stack
// var swapPairs = function (head) {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   let firstNode = head;
//   let secondNode = head.next;
//   firstNode.next = swapPairs(secondNode.next);
//   secondNode.next = firstNode;
//   return secondNode;
// };

// Method 2: Iteration
// Time Complexity: O(n) - n is the number of nodes in the linkedlist
// Space Complexity: O(1)
var swapPairs = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prevNode = dummy;
  while (head !== null && head.next !== null) {
    let firstNode = head;
    let secondNode = head.next;
    // swapping
    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // Reinitialize the head and prevNode for the next step
    prevNode = firstNode;
    head = firstNode.next; //jump
  }
  // return the new head node
  return dummy.next;
};

// @lc code=end
