/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
// Method 1: Recursion
// Time Complexity: O(n) - traverse every node in the tree
// Space Complexity: O(height) - height is the height of the binary tree. Due to the recursion stack,
// the space complexity is equal to the height of the binary tree.
// var maxDepth = function(root) {
//     if (root === null) {
//         return 0;
//     }
//     let leftHeight = maxDepth(root.left);
//     let rightHeight = maxDepth(root.right);
//     return Math.max(leftHeight, rightHeight) + 1;
// };

// Method 2: BFS
// Time Complexity: O(n) - n is the total number of node in the binary tree. Each node is visited exactly once
// Space Complexity: O(n) - In the worst case, the space is dependent upon the number of nodes in the binary tree, which would be O(n).
let maxDepth = function(root) {
    if (root === null) return 0;
    let queue = [];
    queue.push(root);
    let ans = 0;
    while(queue.length !== 0) {
        let size = queue.length;
        while (size > 0) {
            let node = queue.shift();
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
            size--;
        }
        ans++;
    }
    return ans;
}
// @lc code=end

