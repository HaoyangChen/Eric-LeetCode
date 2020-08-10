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
// Time Complexity: O(max(m, n)), where m and n represents the length of l1 and l2 respectively.
// Space Complexity: O(max(m, n)). The length of the new list is at most max(m, n) + 1
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null || l2 === null) return null;
    
    let dummyHead = new ListNode(0);
    let cur1 = l1;
    let cur2 = l2;
    let cur = dummyHead;
    let carry = 0;
    
    while (cur1 !== null || cur2 !== null) {
        let val1 = cur1 !== null ? cur1.val : 0;
        let val2 = cur2 !== null ? cur2.val : 0;
        let sum = val1 + val2 + carry;
        let newNode = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        cur.next = newNode;
        cur = cur.next;
        if (cur1 !== null) {
            cur1 = cur1.next;
        }
        if (cur2 !== null) {
            cur2 = cur2.next;
        }
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    return dummyHead.next;
};
// @lc code=end

