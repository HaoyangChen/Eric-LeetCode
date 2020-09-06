/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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

// Method: BFS
// Time Complexity: O(n) - Each node enters and exits the queue at most once. So the time complexity of BFS is linear runtime
// Space Complexity: O(n) - Each node enters the queue at most once. So the maximum length of queue is at most n and the space complexity is O(n)
var rightSideView = function (root) {
  const rightmostValueAtDepth = new Map();
  let maxDepth = -1;
  const nodeQueue = [];
  const depthQueue = [];
  nodeQueue.push(root);
  depthQueue.push(0);

  while (nodeQueue.length > 0) {
    let node = nodeQueue.shift();
    let depth = depthQueue.shift();

    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);
      rightmostValueAtDepth.set(depth, node.val);
      nodeQueue.push(node.left);
      nodeQueue.push(node.right);
      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }

  const rightView = [];
  for (let depth = 0; depth <= maxDepth; depth++) {
    rightView.push(rightmostValueAtDepth.get(depth));
  }
  return rightView;
};
// @lc code=end
