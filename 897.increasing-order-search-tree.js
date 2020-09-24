/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */

// Method 1: In-Order Traversal
// An in-order traversal of the nodes will yield all the values in increasing order.
// Time Complexity: O(N), where N is the total number of nodes in the given tree
// Space Complexity: O(N), the size of the answer

// var increasingBST = function (root) {
//   let arr = [];
//   const traversal = (root) => {
//     if (root !== null) {
//       traversal(root.left);
//       arr.push(root.val);
//       traversal(root.right);
//     }
//   };
//   traversal(root);
//   const res = new TreeNode(arr[0]);
//   let currentNode = res;
//   for (let i = 0; i < arr.length - 1; i++) {
//     currentNode.left = null;
//     currentNode.right = new TreeNode(arr[i + 1]);
//     currentNode = currentNode.right;
//   }
//   return res;
// };

// Method 2: Traversal with Relinking
// Time Complexity: O(N) - where N is the total number of nodes in the given tree
// Space Complexity: O(H) in addtional space complexity, where H is the height of the given tree, and the size of the implicit call stack in our in-order traversal.

var increasingBST = function (root) {
  let ans = new TreeNode(0);
  let cur = ans;

  const inorder = (node) => {
    if (node === null) return;
    inorder(node.left);
    node.left = null;
    cur.right = node;
    cur = node;
    inorder(node.right);
  };
  inorder(root);
  return ans.right;
};

// @lc code=end
