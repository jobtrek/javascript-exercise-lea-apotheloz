/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  // Write your code here
  if (typeof needle !== 'string' || typeof haystack !== 'string' || typeof newWord !== 'string'){
    throw new Error("it isn't a string")
  }
  const regex = new RegExp(needle, 'gi')
 return haystack.replace(regex, (match) => {
    let result = '';
   for (let i = 0; i < match.length && i < newWord.length; i++) {
      if (match[i] === match[i].toUpperCase()) {
       result += newWord[i].toUpperCase()
 } else {
        result += newWord[i].toLowerCase()
      }
    }
    return result;
 })
}
