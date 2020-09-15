/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */

// Split the commands with /, for example /a/./b/../../c/ could be split into [ '', 'a', '.', 'b', '..', '..', 'c', '' ]
// Create a stack to store the current path, then iterate through items in the stack path
// Step 1: If encounter words or letters, push it into the stack
// Step 2: If encounter .., pop a recent path from the stack
// Step 3: If encounter . or empty element, leave the stack unchanged
// Step 4: Return '/' + stack.join('/') as a new path

var simplifyPath = function (path) {
  const stack = [];
  const pathArr = path.split("/");
  for (let item of pathArr) {
    if (item === "" || item === ".") {
      continue;
    } else if (item === "..") {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
