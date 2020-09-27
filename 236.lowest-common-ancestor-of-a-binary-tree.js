/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Method 1: Recursion
// Traverse the tree in a depth first manner. The moment you encounter either of the nodes p or q, return some boolean flag. The flag helps to determine if we found the required nodes in any of the paths. The least common ancestor would then be the node for which both the subtree recursions return a True flag. It can also be the node which itself is one of p or q and for which one of the subtree recursions returns a True flag.
// Algorithm:
// 1: Start traversing the tree from the root node.
// 2: If the current node itself is one of p or q, we would mark a variable mid as True and continue the search for the other node in the left and right branches.
// 3: If either of the left or the right branch returns True, this means one of the two nodes was found below.
// 4: If at any point in the traversal, any two of the three flags left, right or mid become True, this means we have found the lowest common ancestor for the nodes p and q.

// Time Complexity: O(N) - where N is the number of nodes in the binary tree. In the worst case, we might be visiting all the nodes of the binary tree.
// Space Complexity: O(N) - This is because the maximum amount of space utilized by the recursion stack would be N since the height of a skewed binary tree would be N
var lowestCommonAncestor = function (root, p, q) {
  // Variable to store LCA node.
  let ans = null;

  const recurseTree = (currentNode, p, q) => {
    // If reached the end of a branch, return false.
    if (currentNode === null) return false;

    // Left Recursion. If left recursion returns true, set left = 1 else 0
    let left = recurseTree(currentNode.left, p, q);

    // Right Recursion
    let right = recurseTree(currentNode.right, p, q);

    // If the current node is one of p or q
    let mid = currentNode === p || currentNode === q ? 1 : 0;

    // If any two of the flags left, right or mid become True
    if (mid + left + right >= 2) {
      ans = currentNode;
    }

    // Return true if any one of the three bool values is True.
    return mid + left + right > 0;
  };

  // Traverse the tree
  recurseTree(root, p, q);
  return ans;
};
// @lc code=end
