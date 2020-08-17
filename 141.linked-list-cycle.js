/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */

 // Method 1: Hash Table
 // Time Complexity: O(n) - We visit each of the n elements in the list at most once. Adding a node to a hash table costs only O(1) time
 // Space Complexity: O(n) - The space depends on the number of elements added to the hash table, which contains at most n elements.
// var hasCycle = function(head) {
//     let nodeSeen = new Set();
//     while (head !== null) {
//         if (nodeSeen.has(head)) {
//             return true;
//         } else {
//             nodeSeen.add(head);
//         }
//         head = head.next;
//     }
//     return false;
// };

// Method 2: Two Pointers
// Time Complexity: O(n) 
//                - If list has no cycle, the fast pointer reaches the end first and the run time depends on the list's length, which is O(n)
//                - If list has cycle, We break down the movement of the slow pointer into two steps, the non-cyclic part and the cyclic part:
//                      1: The slow pointer takes "non-cyclic length" steps to enter the cycle. At this point, the fast pointer has already reached the cycle. \text{Number of iterations} = \text{non-cyclic length} = NNumber of iterations=non-cyclic length=N
//                      2: Number of iterations=almost "\text{cyclic length K}cyclic length K".
//                 Therefore, the worst case time complexity is O(N+K), which is O(n)O(n).
// Space Complexity: O(1)
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// @lc code=end

