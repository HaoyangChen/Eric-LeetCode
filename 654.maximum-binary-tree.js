/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

// The algorithm consists of the following steps:

// Start with the function call construct(nums, 0, n). Here, n refers to the number of elements in the given numsnums array.
// Find the index, maxI of the largest element in the current range of indices (l:r-1). Make this largest element, nums[maxI] as the local root node.

// Determine the left child using construct(nums, l, maxI). Doing this recursively finds the largest element in the subarray left to the current largest element.

// Similarly, determine the right child using construct(nums, maxI + 1, r).

// Return the root node to the calling function.

// Time Complexity: O(n^2) - The function construct is called n times. At each level of the recursive tree, we traverse over all the n elements to find the maximum element. In the average case, there will be a logn levels leading to a complexity of O(nlogn). In the worst case, the depth of the recursive tree can grow up to n, which happens in the case of a sorted nums array, giving a complexity of O(n^2)
// Space Complexity: O(n) - The size of the set can grow up to n in the worst case. In the average case, the size will be logn for n elements in nums, giving an average case complexity of O(logn)
var constructMaximumBinaryTree = function (nums) {
  return constructHelper(nums, 0, nums.length);
};

const constructHelper = (nums, l, r) => {
  if (l === r) return null;
  let maxI = max(nums, l, r);
  let root = new TreeNode(nums[maxI]);
  root.left = constructHelper(nums, l, maxI);
  root.right = constructHelper(nums, maxI + 1, r);
  return root;
};

const max = (nums, l, r) => {
  let maxI = l;
  for (let i = l; i < r; i++) {
    if (nums[maxI] < nums[i]) {
      maxI = i;
    }
  }
  return maxI;
};

// @lc code=end
