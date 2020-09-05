/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// Method 1: BFS
// Algorithm:
// Do the pre-processing on the given wordList and find all the possible generic/intermediate states. Save these intermediate states in a dictionary with key as the intermediate word and value as the list of words which have the same intermediate word.
// Push a tuple containing the beginWord and 1 in a queue. The 1 represents the level number of a node. We have to return the level of the endNode as that would represent the shortest sequence/distance from the beginWord.
// To prevent cycles, use a visited dictionary.
// While the queue has elements, get the front element of the queue. Let's call this word as current_word.
// Find all the generic transformations of the current_word and find out if any of these transformations is also a transformation of other words in the word list. This is achieved by checking the all_combo_dict.
// The list of words we get from all_combo_dict are all the words which have a common intermediate state with the current_word. These new set of words will be the adjacent nodes/words to current_word and hence added to the queue.
// Hence, for each word in this list of intermediate words, append (word, level + 1) into the queue where level is the level for the current_word.
// Eventually if you reach the desired word, its level would represent the shortest transformation sequence length.

// Time Complexity: O(M^2 * N)
// where M is the length of each word and N is the total number of words in the input word list.
// For each word in the word list, we iterate over its length to find all the intermediate words corresponding to it. Since the length of each word is M and we have N words, the total number of iterations the algorithm takes to create all_combo_dict is M×N. Additionally, forming each of the intermediate word takes O(M) time because of the substring operation used to create the new string. This adds up to a complexity of O(M^2 * N)
//  Breadth first search in the worst case might go to each of the N words. For each word, we need to examine M possible intermediate words/combinations. Notice, we have used the substring operation to find each of the combination. Thus, M combinations take O(M ^ 2) time. As a result, the time complexity of BFS traversal would also be O({M}^2 * N)

// Space Complexity: O(M^2 * N)
// Each word in the word list would have M intermediate combinations. To create the all_combo_dict dictionary we save an intermediate word as the key and its corresponding original words as the value. Note, for each of M intermediate words we save the original word of length M. This simply means, for every word we would need a space of {M}^2
// 2
//   to save all the transformations corresponding to it. Thus, all_combo_dict would need a total space of O({M}^2 * N)
// Visited dictionary would need a space of O(M × N) as each word is of length M.
// Queue for BFS in worst case would need a space for all O(N) words and this would also result in a space complexity of O(M × N).

var ladderLength = function (beginWord, endWord, wordList) {
  let L = beginWord.length;
  let allComboDict = new Map();
  for (word of wordList) {
    for (let i = 0; i < L; i++) {
      let newWord = word.substring(0, i) + "*" + word.substring(i + 1, L);
      let transformation = allComboDict.get(newWord)
        ? allComboDict.get(newWord)
        : [];
      transformation.push(word);
      allComboDict.set(newWord, transformation);
    }
  }

  // queue for BFS
  let queue = [[beginWord, 1]];
  // Visited to make sure we don't repeat processing same word.
  let visited = { beginWord: true };
  while (queue.length > 0) {
    let currNode = queue.shift();
    let currWord = currNode[0];
    let currLevel = currNode[1];
    for (let i = 0; i < L; i++) {
      // Intermediate words for current word
      let newWord =
        currWord.substring(0, i) + "*" + currWord.substring(i + 1, L);
      if (allComboDict.has(newWord)) {
        let tempWord = allComboDict.get(newWord);
        for (let z = 0; z < tempWord.length; z++) {
          if (tempWord[z] === endWord) {
            return currLevel + 1;
          }
          if (!visited[tempWord[z]]) {
            visited[tempWord[z]] = true;
            queue.push([tempWord[z], currLevel + 1]);
          }
        }
      }
    }
  }
  return 0;
};
// @lc code=end
