/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */

// Method 1: Copy everything to array and use two pointers
// Time Complextiy: O(n) - n is the number of elements in the linkedlist. Copy everthing to array costs O(N), and checking if the array is a palindrome costs O(N/2). So the overall time complexity is O(2N) = O(N)
// Space Complexity: O(n) - n is the number of elements in the linkedlist. We use an array to store values in the linkedlist
var isPalindrome = function (head) {
  let vals = [];
  let currentNode = head;
  while (currentNode !== null) {
    vals.push(currentNode.val);
    currentNode = currentNode.next;
  }

  let front = 0;
  let back = vals.length - 1;
  while (front < back) {
    if (vals[front] !== vals[back]) {
      return false;
    }
    front++;
    back--;
  }
  return true;
};
// @lc code=end
