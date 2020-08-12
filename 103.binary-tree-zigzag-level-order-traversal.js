/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */

 // Time Complexity: O(N), N is the total number of nodes in the binary tree.
 // Space Complexity: O(N), N is the total number of nodes in the binary tree.
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let result = [];
    let nodeQueue = [];
    nodeQueue.push(root);
    nodeQueue.push(null);
    let levelList = [];
    let isOrderLeft = true;
    while (nodeQueue.length > 0) {
        let currNode = nodeQueue.shift();
        if (currNode != null) {
            if (isOrderLeft) {
                levelList.push(currNode.val);
            } else {
                levelList.unshift(currNode.val);
            }
            if (currNode.left !== null) nodeQueue.push(currNode.left);
            if (currNode.right !== null) nodeQueue.push(currNode.right);
        } else {
            // we finish the scan of one level
            result.push(levelList);
            levelList = [];
            if (nodeQueue.length > 0) {
                nodeQueue.push(null);
            }
            isOrderLeft = !isOrderLeft;
        }
    }
    return result;
};
// @lc code=end

