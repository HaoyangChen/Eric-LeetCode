/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

// Using Hashset
// Time Complexity: O(n) - The entire tree is traversed only once in the worst case. Here, n refers to the number of nodes in the given tree.
// Space Complexity: O(n)  - The size of the set can grow up to n in the worst case.
var findTarget = function (root, k) {
  const set = new Set();
  return find(root, k, set);
};

const find = (root, k, set) => {
  if (root === null) return false;
  if (set.has(k - root.val)) return true;
  set.add(root.val);
  return find(root.left, k, set) || find(root.right, k, set);
};

// @lc code=end
