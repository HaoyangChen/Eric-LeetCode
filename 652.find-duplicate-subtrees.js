/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */

// Time Complexity O(N^2), where N is the number of nodes in the tree. We visit each node once, but each creation of serial may take O(N) work
// Space Complexity: O(N^2) the size of count
var findDuplicateSubtrees = function (root) {
  let count = new Map();
  let ans = [];

  const collect = (node) => {
    if (node === null) return "#";
    let serial =
      node.val + "," + collect(node.left) + "," + collect(node.right);
    count.set(serial, count.get(serial) ? count.get(serial) + 1 : 1);
    if (count.get(serial) === 2) ans.push(node);
    return serial;
  };
  collect(root);
  return ans;
};
// @lc code=end
