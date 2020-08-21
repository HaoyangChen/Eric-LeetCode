/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// Method 1: Recursion - Pre-order Traversal
// Time Complexity: O(n) - where n is the number of nodes in the binary tree. After traversing the tree, we need to update the left and right node of each node, so the time complexity is O(n)
// Space Complexity: O(n) - Recursion stack
// var flatten = function (root) {
//   const list = [];
//   preOrderTraversal(root, list);
//   const size = list.length;
//   for (let i = 1; i < size; i++) {
//     const prev = list[i - 1],
//       curr = list[i];
//     prev.left = null;
//     prev.right = curr;
//   }
// };

// const preOrderTraversal = (root, list) => {
//   if (root !== null) {
//     list.push(root);
//     if (root.left !== null) {
//       preOrderTraversal(root.left, list);
//     }
//     if (root.right !== null) {
//       preOrderTraversal(root.right, list);
//     }
//   }
// };

// Method 2: Iteration - Pre-order Traversal
// Time Complexity: O(n) - where n is the number of nodes in the binary tree. After traversing the tree, we need to update the left and right node of each node, so the time complexity is O(n)
// Space Complexity: O(n) - The space of storing nodes in stack and result. The total elements in the stack is at most n
// var flatten = function (root) {
//   const list = [];
//   const stack = [];
//   let node = root;
//   while (node !== null || stack.length) {
//     while (node !== null) {
//       list.push(node);
//       stack.push(node);
//       node = node.left;
//     }
//     node = stack.pop();
//     node = node.right;
//   }
//   const size = list.length;
//   for (let i = 1; i < size; i++) {
//     let prev = list[i - 1];
//     let curr = list[i];
//     prev.left = null;
//     prev.right = curr;
//   }
// };

// Method 3: Pre-order Traversal and Flatten at the same time
// Time Complexity: O(n) - n is the total number of nodes in the tree. The pre-order traversal takes O(n) time and updates nodes takes O(1) time. So the overall time complexity is O(n)
// Space Complexity: O(n) - The space complexity depends on the space of the stack, and the total number of elements in the stack is at most n
// var flatten = function (root) {
//   if (root === null) return;
//   const stack = [];
//   stack.push(root);
//   let prev = null;
//   while (stack.length) {
//     const curr = stack.pop();
//     if (prev !== null) {
//       prev.left = null;
//       prev.right = curr;
//     }
//     const left = curr.left,
//       right = curr.right;
//     if (right !== null) {
//       stack.push(right);
//     }
//     if (left !== null) {
//       stack.push(left);
//     }
//     prev = curr;
//   }
// };

// Time Complexity: O(n) - n is the total number of nodes in the tree.
// Space Complexity
var flatten = function (root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};

// @lc code=end
