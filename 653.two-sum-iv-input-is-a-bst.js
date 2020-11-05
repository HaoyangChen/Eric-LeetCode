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
// var findTarget = function (root, k) {
//   const set = new Set();
//   return find(root, k, set);
// };

// const find = (root, k, set) => {
//   if (root === null) return false;
//   if (set.has(k - root.val)) return true;
//   set.add(root.val);
//   return find(root.left, k, set) || find(root.right, k, set);
// };

// Using BFS and Hashset
// Algorithm:
// 1: Remove an element p from the front of the queue
// 2: Check if the element k - p already exists in the set. If so, return True
// 3: Otherwise, add this element p to the set. Further, add the right and left child nodes of the current node to the back of the queue
// 4: Continue step 1 to 3 till the queue becomes empty
// 5: Return false if the queue becomes empty

// Time Complexity: O(n). We need to traverse the whole tree once in the worst case. Here, n refers to the number of nodes in the given tree.
// Space Complexity: O(n). The size of the set can grow almost up to n.
var findTarget = function (root, k) {
  const set = new Set();
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    if (queue[0] !== null) {
      const node = queue.shift();
      if (set.has(k - node.val)) return true;
      set.add(node.val);
      queue.push(node.right);
      queue.push(node.left);
    } else {
      queue.shift();
    }
  }
  return false;
};

// @lc code=end
