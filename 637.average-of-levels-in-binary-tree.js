/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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

// BFS
// we start by pushing the root node into a queue. Then, we remove an element(node) from the front of the queue. For every node removed from the queue, we add all its children to the back of the same queue. We keep on continuing this process till the queue becomes empty. In this way, we can traverse the given tree on a level-by-level basis.
// Algorithm:
// Put the root node into the queue.
// Initialize sum and count as 0 and temp as an empty queue.
// Pop a node from the front of the queue. Add this node's value to the sum corresponding to the current level. Also, update the count corresponding to the current level.
// Put the children nodes of the node last popped into the a temp queue(instead of queue).
// Continue steps 3 and 4 till queue becomes empty. (An empty queue indicates that one level of the tree has been considered).
// Reinitialize queue with its value as temp.
// Populate the res array with the average corresponding to the current level.
// Repeat steps 2 to 7 till the queue and temp become empty. At the end, res is the required result.

// Time Complexity: O(n) - The whole tree is traversed almost once. Here, n refers to the number of nodes in the given tree.
// Space Complexity: O(m) - The size of queue or temp can grow upto almost the maximum number of nodes at any level in the given binary tree. Here, m refers to the maximum number of nodes at any level in the input tree.
var averageOfLevels = function (root) {
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let sum = 0,
      count = 0;
    let temp = [];
    while (queue.length > 0) {
      let n = queue.shift();
      sum += n.val;
      count++;
      if (n.left !== null) {
        temp.push(n.left);
      }
      if (n.right !== null) {
        temp.push(n.right);
      }
    }
    queue = temp;
    res.push(sum / count);
  }
  return res;
};
// @lc code=end
