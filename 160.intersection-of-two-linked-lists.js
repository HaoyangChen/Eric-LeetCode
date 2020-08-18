/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 // Method 1: Traverse headA and tag each node first. Then traverse headB to see if node has any tag. If it has, return that node.
// var getIntersectionNode = function(headA, headB) {
//     while (headA) {
//         headA.sep = 1;
//         headA = headA.next;
//     }
//     while (headB) {
//         if (headB.sep) return headB;
//         headB = headB.next;
//     }
// };

// Method 2: Two Pointers 
// Maintain two pointers pApA and pBpB initialized at the head of A and B, respectively. Then let them both traverse through the lists, one node at a time.
// When pApA reaches the end of a list, then redirect it to the head of B (yes, B, that's right.); similarly when pBpB reaches the end of a list, redirect it the head of A.
// Time Complexity: O(m + n)
// Space Complexity: O(1)
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pB = pB ? pB.next : headA;
        pA = pA ? pA.next : headB;
    }
    return pA;
}
// @lc code=end

