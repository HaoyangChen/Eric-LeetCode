/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// Method 1: Recursion
// Time Complexity: O(N)
// Space Complexity: O(N) - to store the entire binary tree
var buildTree = function (inorder, postorder) {
  let indexMap = new Map();
  // start from the last postorder element
  let postIndex = postorder.length - 1;

  // build a hashmap value -> its index
  let index = 0;
  for (let val of inorder) {
    indexMap.set(val, index++);
  }
  const helper = (inLeft, inRight) => {
    // if there is no elements to construct subtrees
    if (inLeft > inRight) {
      return null;
    }
    // pick up post_idx element as a root
    let rootVal = postorder[postIndex];
    let root = new TreeNode(rootVal);

    // root splits inorder list
    // into left and right subtrees
    let index = indexMap.get(rootVal);
    // recursion
    postIndex--;
    // build right subtree
    root.right = helper(index + 1, inRight);
    // build left subtree
    root.left = helper(inLeft, index - 1);
    return root;
  };

  return helper(0, inorder.length - 1);
};

// @lc code=end
