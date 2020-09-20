/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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

// Method 1: Recursion
// Algorithm: For the recursive approach, we maintain some minor "global" state so each recursive call can access and modify the current total sum. Essentially, we ensure that the current node exists, recurse on the right subtree, visit the current node by updating its value and the total sum, and finally recurse on the left subtree. If we know that recursing on root.right properly updates the right subtree and that recursing on root.left properly updates the left subtree, then we are guaranteed to update all nodes with larger values before the current node and all nodes with smaller values after.
// Time Complexity: O(n) - A binary tree has no cycle by definition, so convertBST gets called on each node no more than once. Other than the recursive calls, convertBST does a constant amount of work, so a linear number of calls to convertBSTHelper will run in linear time
// Space Complexity: O(n) - Using the prior assertion that convertBSTHelper is called a linear number of times, we can also show that the entire algorithm has linear space complexity. Consider the worst case, a tree with only right (or left) subtrees. The call stack will grow until the end of the longest path is reached, which in this case includes all n nodes.
// var convertBST = function (root) {
//   let sum = 0;
//   const convertBSTHelper = (root) => {
//     if (root !== null) {
//       convertBSTHelper(root.right);
//       sum += root.val;
//       root.val = sum;
//       convertBSTHelper(root.left);
//     }
//   };
//   convertBSTHelper(root);
//   return root;
// };

// Method 2: Iteration with a stack
// Algorithm: First, we initialize an empty stack and set the current node to the root. Then, so long as there are unvisited nodes in the stack or node does not point to null, we push all of the nodes along the path to the rightmost leaf onto the stack. This is equivalent to always processing the right subtree first in the recursive solution, and is crucial for the guarantee of visiting nodes in order of decreasing value. Next, we visit the node on the top of our stack, and consider its left subtree. This is just like visiting the current node before recursing on the left subtree in the recursive solution. Eventually, our stack is empty and node points to the left null child of the tree's minimum value node, so the loop terminates.
// Time Complexity: O(n) - The key observation is that each node is pushed onto the stack exactly once. I will take for granted the assumption that a node will always be pushed at least once, as the alternative would imply that at least one node is disconnected from the root. Notice that nodes are only pushed onto the stack when they are pointed to by node at the beginning of the outer while loop, or when there is a path to them from such a node by using only right pointers. Then notice that at the end of each iteration of the loop, node points to the left child of a node that has been pushed onto (and subsequently popped from) the stack. Therefore, because the outer while loop always begins with node pointing to None, the root (which is not pointed to by any other node), or a left child of a visited node, we cannot revisit nodes.
// Space Complexity: O(n) - If we assume that the above logic is sound, the assertion that each node is pushed onto the stack exactly once implies that the stack can contain (at most) n nodes. All other parts of the algorithm use constant space, so there is overall a linear memory footprint.
var convertBST = function (root) {
  let sum = 0;
  let node = root;
  let stack = [];
  while (stack.length > 0 || node !== null) {
    // push all nodes up to and including this subtree's maximum on the stack
    while (node !== null) {
      stack.push(node);
      node = node.right;
    }
    node = stack.pop();
    sum += node.val;
    node.val = sum;

    // all nodes with values between the current and its parent lie in the left subtree
    node = node.left;
  }
  return root;
};

// @lc code=end
