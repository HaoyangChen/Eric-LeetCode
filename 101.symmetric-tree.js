/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */

// Method 1: Recursion
// Time Complexity: O(n) - Because we need to traverse the entire input tree once, the total runtime is O(n), where n is the number of nodes in the tree.
// Space Complexity: O(n) - The number of recursive calls is bound by the height of the tree. In the worst case, the tree is linear and the height is in O(n).
//                            Therefore, space complexity due to recursive calls on the stack is O(n) in the worst case.
// var isSymmetric = function (root) {
//   return isMirror(root, root);
// };

// const isMirror = (t1, t2) => {
//   if (t1 === null && t2 === null) return true;
//   if (t1 === null || t2 === null) return false;
//   return (
//     t1.val === t2.val &&
//     isMirror(t1.right, t2.left) &&
//     isMirror(t1.left, t2.right)
//   );
// };

// Method 2: Iteration - BFS
// Instead of recursion, we can also use iteration with the aid of a queue. Each two consecutive nodes in the queue should be equal, and their subtrees a mirror of each other. Initially, the queue contains root and root. Then the algorithm works similarly to BFS, with some key differences. Each time, two nodes are extracted and their values compared. Then, the right and left children of the two nodes are inserted in the queue in opposite order. The algorithm is done when either the queue is empty, or we detect that the tree is not symmetric (i.e. we pull out two consecutive nodes from the queue that are unequal).
// Time Complexity: O(n) - Because we traverse the entire input tree once, the total run time is O(n), where n is the total number of nodes in the tree.
// Space Complexity: O(n) - There is additional space required for the search queue. In the worst case, we have to insert O(n) nodes in the queue. Therefore, the space complexity is O(n)
var isSymmetric = function (root) {
  let q = [];
  q.push(root);
  q.push(root);
  while (q.length !== 0) {
    let t1 = q.shift();
    let t2 = q.shift();
    if (t1 === null && t2 === null) continue;
    if (t1 === null || t2 === null) return false;
    if (t1.val !== t2.val) return false;
    q.push(t1.left);
    q.push(t2.right);
    q.push(t1.right);
    q.push(t2.left);
  }
  return true;
};
// @lc code=end
