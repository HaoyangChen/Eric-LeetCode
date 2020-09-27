/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
 * @return {number}
 */

// Method 1: Recursion
// var findBottomLeftValue = function (root) {
//   let maxDepth = -1;
//   let record;
//   const traverse = (node, depth) => {
//     if (node === null) return;
//     if (depth > maxDepth) {
//       record = node.val;
//       maxDepth = depth;
//     }
//     traverse(node.left, depth + 1);
//     traverse(node.right, depth + 1);
//   };
//   traverse(root, 0);
//   return record;
// };

// Method 2: BFS
var findBottomLeftValue = function (root) {
  if (root === null) return 0;
  let queue = [];
  let res;
  queue.push(root);
  while (queue.length > 0) {
    let front = queue.shift();
    res = front.val;
    if (front.right) {
      queue.push(front.right);
    }
    if (front.left) {
      queue.push(front.left);
    }
  }
  return res;
};

// @lc code=end
