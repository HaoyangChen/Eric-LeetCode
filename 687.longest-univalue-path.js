/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
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
 * @return {number}
 */

// Let arrow_length(node) be the length of the longest arrow that extends from the node. That will be 1 + arrow_length(node.left) if node.left exists and has the same value as node. Similarly for the node.right case.
// While we are computing arrow lengths, each candidate answer will be the sum of the arrows in both directions from that node. We record these candidate answers and return the best one.

// Time Complexity: O(N) - where N is the number of nodes in the tree. We process each node once
// Space Complexity: O(H) - where H is the height of the tree. Our recursive call stack could be up to H layers deep
var longestUnivaluePath = function (root) {
  let ans = 0;

  const arrowLength = (node) => {
    if (node === null) return 0;
    let left = arrowLength(node.left);
    let right = arrowLength(node.right);
    let arrowLeft = 0,
      arrowRight = 0;
    if (node.left !== null && node.left.val === node.val) {
      arrowLeft += left + 1;
    }
    if (node.right !== null && node.right.val === node.val) {
      arrowRight += right + 1;
    }
    ans = Math.max(ans, arrowLeft + arrowRight);
    return Math.max(arrowLeft, arrowRight);
  };

  arrowLength(root);
  return ans;
};

// @lc code=end
