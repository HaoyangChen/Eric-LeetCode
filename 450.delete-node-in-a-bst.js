/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */

// Time Complexity: O(logn) - It takes O(H1) time to find the node to be deleted. H1 is the height from the root node to the node to remove. Removing the node takes O(H2) time, H2 refers to the height from the node to remove to the node to be replaced. Because O(H1 + H2) = O(H), H is the height of the BST. If the tree is balanced, H = logN.
// Space Complexity: O(H) - space due to the recursion stack, where H is the height of the tree.
var deleteNode = function (root, key) {
  if (root === null) return null;

  // delete from the right subtree
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    // delete from the left subtree
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    // delete the current node
  } else {
    // The node is a leaf
    if (root.left === null && root.right === null) {
      root = null;
      // The node is not a leaf and has a right child
    } else if (root.right !== null) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
      // The node is not a leaf and has a left child
    } else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }
  return root;
};

// One step right and always left
const successor = (root) => {
  root = root.right;
  while (root.left !== null) {
    root = root.left;
  }
  return root.val;
};

// One step left and always right
const predecessor = (root) => {
  root = root.left;
  while (root.right !== null) {
    root = root.right;
  }
  return root.val;
};

// @lc code=end
