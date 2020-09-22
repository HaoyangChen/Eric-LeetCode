/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

// Method 1: Using Preorder Traversal
// Algorithm: https://leetcode.com/problems/subtree-of-another-tree/solution/
// Time Complexity: O(m^2 + n^2 + m * n) - A total of n nodes of the tree ss and mm nodes of tree tt are traversed. Assuming string concatenation takes O(k) time for strings of length k and indexOf takes O(m*n).
// Space Complexity: O(max(m, n)) - The depth of the recursion tree can go upto n for tree t and m for tree s in the worst case
var isSubtree = function (s, t) {
  let tree1 = preorder(s, true);
  let tree2 = preorder(t, true);
  return tree1.indexOf(tree2) >= 0;
};

const preorder = (t, left) => {
  if (t === null) {
    if (left) {
      return "lnull";
    } else {
      return "rnull";
    }
  }
  return "#" + t.val + " " + preorder(t.left, true) + preorder(t.right, false);
};
// @lc code=end
