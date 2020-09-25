/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @return {number}
 */

// It's a very straightforward approach with O(N) time complexity. The idea is to build an inorder traversal of BST which is an array sorted in the ascending order. Now the answer is the k - 1th element of this array.
// Time Complexity: O(n) to build a traversal
// Space Complexity: O(n) to keep an inorder traversal
// var kthSmallest = function (root, k) {
//   let nums = inorder(root, []);
//   return nums[k - 1];
// };

// const inorder = (root, arr) => {
//   if (root === null) return arr;
//   inorder(root.left, arr);
//   arr.push(root.val);
//   inorder(root.right, arr);
//   return arr;
// };

// Method 2: Iteration
// This way one could speed up the solution because there is no need to build the entire inorder traversal, and one could stop after the kth element.
// Time Complexity: O(H + k) - whre H is a tree height. This complexity is defined by the stack, which contains at least H + K elements, since before starting to pop out one has to go down a leaf. This results in O(logN + k) for the balanced tree and O(N + k) for completely unbalanced tree with all nodes in the left subtree.
// Space Complexity: O(H) tp keep the stack, where H is the height. That make O(N) the worst case of the skewed tree, and O(logN) in the average case of balanced tree.
var kthSmallest = function (root, k) {
  let stack = [];
  while (true) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (--k === 0) return root.val;
    root = root.right;
  }
};

// @lc code=end
