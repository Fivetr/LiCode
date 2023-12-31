import assert from "assert";
import { Problem } from "@/types/index";

const problemStatement = `
<p class='mt-4'>
A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase 
letters and removing all non-alphanumeric characters, it reads the same forward and 
backward. Alphanumeric characters include letters and numbers.
</p>
<p class='mt-4'>
Given a string <code>s</code>, return <code>true</code> <em>if it is a</em> 
<strong>palindrome</strong>, <em>or</em> <code>false</code> <em>otherwise</em>.
</p>


`;

const examples = [
  {
    id: 1,
    inputText: 's = "A man, a plan, a canal: Panama"',
    outputText: "true",
    explanation: '"amanaplanacanalpanama" is a palindrome.',
  },
  {
    id: 2,
    inputText: 's = "race a car"',
    outputText: "false",
    explanation: '"raceacar" is not a palindrome.',
  },
  {
    id: 3,
    inputText: 's = " "',
    outputText: "true",
    explanation:
      's is an empty string "" after removing non-alphanumeric characters. \nSince an empty string reads the same forward and backward, it is a palindrome.',
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>1 ≤ s.length ≤ 2 * 10<sup>5</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>s</code> consists only of printable ASCII characters.
</li> 
`;

const starterCode = `/**
* @param {string} s
* @return {boolean}
*/
var isPalindrome = function(s) {
  // Write your code here
};`;

const solution = {
  solution: `var isPalindrome = function(s) {
  const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) ||
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122)
    );
  };
  /* Initialize the left pointer to the start of the string,
  the right pointer to the end of the string */
  let left = 0, right = s.length - 1;
  while (left < right) {
    // If s[left] is not an alphanumeric character left++
    if (!isAlphaNumeric(s[left])) left++;
    // If s[right] is not an alphanumeric character righ--
    else if (!isAlphaNumeric(s[right])) right--;
    /* If the lowercase of s[left] is not equal to the lowercase of s[right]
    the string is not a palindrome. Return false */ 
    else if (
      s[left].toLowerCase() !== s[right].toLowerCase()
    )
      return false;
    /* If the characters are equal, increment left by 1 and decrement 
    right by 1 to continue checking the next pair of characters. */ 
    else {
      left++;
      right--;
    }
  }
  /*If the loop completes without returning false, 
  it means the string is a palindrome. Return true.*/
  return true;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_IsPalindrome = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const s = ["A man, a plan, a canal: Panama", "race a car", " "];

    const answers = [true, false, true];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < s.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(s[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("IsPalindrome handler function error");
    throw new Error(error);
  }
};

export const ValidPalindrome: Problem = {
  order: 1,
  id: "valid-palindrome",
  title: "Valid Palindrome",
  difficulty: "Easy",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "isPalindrome(s)",
  handlerFunction: handle_IsPalindrome,
};
