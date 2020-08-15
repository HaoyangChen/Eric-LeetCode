/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
// Time Complexity: O(n) - We visit each node in the binary tree once, so the time complexity is O(n), where n is the total number of nodes in the tree.
// Space Complexity: Worst Case O(n), Best Case O(log(n))
//                     In the worst case, the binary tree is completely unbalanced like linkedlist, the recursion stack will cost O(n) space.
//                      In the best case, the binary tree is balanced, the height of the binary tree is O(log(n)), so the time complexity is this case is O(log(n))
// var minDepth = function(root) {
//     if (root === null) return 0;
//     if (root.left === null && root.right === null) {
//         return 1;
//     }
//     let min_depth = Number.MAX_VALUE;
//     if (root.left !== null) {
//         min_depth = Math.min(min_depth, minDepth(root.left));
//     }
//     if (root.right !== null) {
//         min_depth = Math.min(min_depth, minDepth(root.right));
//     }
//     return min_depth + 1;
// };

// Method 2: DFS
// Time Complexity: O(n): Each node in the binary tree is visited exactly once, so the time complexity is O(n)
// Space Complexity: O(n) - In the worst case, we will store the entire tree in the stack, so the space complexity is O(n)
// var minDepth = function(root) {
//     if (!root) return 0;
//     let tempStack = [{"key": root, "val": 1}];
//     let depth = Number.MAX_SAFE_INTEGER;
//     while (tempStack.length !== 0) {
//         let currObj = tempStack.pop();
//         let currNode = currObj.key;
//         if (currNode !== null) {
//             let currNode_depth = currObj.val;
//             if (currNode.left === null && currNode.right === null) {
//                 depth = Math.min(currNode_depth, depth);
//             }
//             if (currNode.left !== null) {
//                 tempStack.push({"key": currNode.left, "val": currNode_depth + 1});
//             }
//             if (currNode.right !== null) {
//                 tempStack.push({"key": currNode.right, "val": currNode_depth + 1});
//             }
//         }
//     }
//     return depth;
// }

// Method 3: BFS
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let tmpQueue = [root];
  let depth = 0;
  let currNode = null;
  while (tmpQueue.length !== 0) {
    let size = tmpQueue.length;
    depth++;
    while (size > 0) {
      currNode = tmpQueue.shift();
      if (!currNode.left && !currNode.right) {
        return depth;
      }
      if (currNode.left !== null) {
        tmpQueue.push(currNode.left);
      }
      if (currNode.right !== null) {
        tmpQueue.push(currNode.right);
      }
      size--;
    }
  }
  return depth;
};

// @lc code=end
