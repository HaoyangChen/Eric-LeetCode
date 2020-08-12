/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

 // in-order traversal, always select one number to the right of the middle number to be the root
 // Time Complexity: O(n) - n is the length of the given array, and each number is visited exactly once.
 // Space Complexity: O(log(n)) - The depth of the recursion stack is O(log(n))

var sortedArrayToBST = function(nums) {
    return treeHelper(nums, 0, nums.length - 1);
};

var treeHelper = function(nums, left, right) {
    if (left > right) return null;
    let mid = parseInt((left + right + 1) / 2)
    let root = new TreeNode(nums[mid]);
    root.left = treeHelper(nums, left, mid - 1);
    root.right = treeHelper(nums, mid + 1, right);
    return root;
}
// @lc code=end

