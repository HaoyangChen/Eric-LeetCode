/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */

// Method: Recursion
// Time Complexity: O(n) - Each node in the tree is visited exactly once
// Space Complexity: O(n) - In the worst case, when the binary tree only has one child node for each of its node, the level of recursion is n and the space complexity is O(n).
//                          In the best case, when the binary tree is balanced, its height is O(logn). The time complexity is O(log(n))
var binaryTreePaths = function (root) {
  let paths = [];
  constructPath(root, "", paths);
  return paths;
};

const constructPath = (root, path, paths) => {
  if (root !== null) {
    path += root.val;
    if (root.left === null && root.right === null) {
      paths.push(path);
    } else {
      path += "->";
      constructPath(root.left, path, paths);
      constructPath(root.right, path, paths);
    }
  }
};
// @lc code=end
