/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */

// Method 1: Recursion
// Time Complexity: O(n) - n is the number of nodes in the binary tree. We visit each node once
// Space Complexity: O(H) - where H is the height of the tree. The space complexity is determined by the space of recursion stack. In the worst case, when the binary tree becomes a linkedlist, the time complexity is O(N)
//                          In the average case, the height of the tree is log(N), so the space complexity is O(log(N))
// var hasPathSum = function (root, sum) {
//   if (root === null) {
//     return false;
//   }
//   if (root.left === null && root.right === null) {
//     return sum === root.val;
//   }
//   return (
//     hasPathSum(root.left, sum - root.val) ||
//     hasPathSum(root.right, sum - root.val)
//   );
// };

// Method 2: BFS
// Time Complexity: O(N) - where N is the number of nodes in the binary tree. Each node is visited exactly once.
// Space Complexity: O(N) - where N is the number of nodes in the binary tree. The space complexity is determined by the space of the queue. The total number elements in the queue is at most N
var hasPathSum = function (root, sum) {
  if (root === null) {
    return false;
  }
  let queNode = [];
  let queVal = [];
  queNode.push(root);
  queVal.push(root.val);

  while (queNode.length !== 0) {
    let now = queNode.shift();
    let temp = queVal.shift();
    if (now.left === null && now.right === null) {
      if (temp === sum) {
        return true;
      }
      continue;
    }
    if (now.left !== null) {
      queNode.push(now.left);
      queVal.push(now.left.val + temp);
    }
    if (now.right !== null) {
      queNode.push(now.right);
      queVal.push(now.right.val + temp);
    }
  }
  return false;
};

// @lc code=end
