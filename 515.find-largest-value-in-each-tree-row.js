/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */

// Method 1: BFS
// var largestValues = function (root) {
//   let queue = [];
//   let values = [];
//   if (root !== null) {
//     queue.push(root);
//   }
//   while (queue.length > 0) {
//     let max = Number.MIN_VALUE;
//     let levelSize = queue.length; // number of nodes in each level
//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       max = Math.max(max, node.val); // store the largest value in each row
//       if (node.left !== null) {
//         queue.push(node.left);
//       }
//       if (node.right !== null) {
//         queue.push(node.right);
//       }
//     }
//     values.push(max);
//   }
//   return values;
// };

// Method 2: DFS
var largestValues = function (root) {
  let res = [];
  helper(root, res, 1);
  return res;
};

const helper = (root, res, level) => {
  if (root === null) return;
  // if on the next level, add the value to the res
  if (level === res.length + 1) {
    res.push(root.val);
  } else {
    res[level - 1] = Math.max(res[level - 1], root.val);
  }
  helper(root.left, res, level + 1);
  helper(root.right, res, level + 1);
};

// @lc code=end
