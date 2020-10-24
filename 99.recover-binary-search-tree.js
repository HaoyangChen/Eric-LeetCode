/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// Method 1: Inorder traversal
// Time Complexity: O(N) - where N is the number of nodes in the binary search tree. In order traversal takes O(N) runtime. The best case in determining the two nodes to be swapped is O(1). In the worst case, swapping two nodes is O(N). So the overall time complexity is O(N)
// Space Complexity: O(N) - We need a nums array to store the inorder traversal list
var recoverTree = function (root) {
  let nums = [];
  inorder(root, nums);
  const [first, second] = findTwoSwapped(nums);
  recover(root, 2, first, second);
};

const inorder = (root, nums) => {
  if (root === null) return;
  inorder(root.left, nums);
  nums.push(root.val);
  inorder(root.right, nums);
};

const findTwoSwapped = (nums) => {
  const n = nums.length;
  let x = -1,
    y = -1;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      y = nums[i + 1];
      if (x === -1) {
        x = nums[i];
      } else break;
    }
  }
  return [x, y];
};

const recover = (r, count, x, y) => {
  if (r !== null) {
    if (r.val === x || r.val === y) {
      r.val = r.val === x ? y : x;
      if (--count === 0) return;
    }
    recover(r.left, count, x, y);
    recover(r.right, count, x, y);
  }
};

// @lc code=end
