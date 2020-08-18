/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 // Method 1: Recursion
 // Time Complexity: O(n) - n is the number of nodes in the binary tree
 // Space Complexity: O(n) - Besides the answer that requires O(n) space, we also need O(n) space to store hash map, and O(h) space to count the recursion stack- h is the height of binary tree. In this problem, h < n, so the space time is O(n)
var buildTree = function(preorder, inorder) {
    const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

    const helper = (p_start, p_end, i_start, i_end) => {
        if (p_start > p_end) return null;
        let rootVal = preorder[p_start];    // 根节点的值
        let root = new TreeNode(rootVal);   // 根节点
        let mid = map.get(rootVal);         // 根节点在inorder的位置
        let leftNum = mid - i_start;        // 左子树的节点数
        root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
        root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end

