import assert from "assert";
import { Problem } from "@/types/index";
import img1 from "./images/rain_water_1.jpg";

const problemStatement = `<p class='mt-4'>
Given <code>n</code> non-negative integers representing an elevation map where 
the width of each bar is <code>1</code>, compute how much water it can trap after raining.
</p>`;

const examples = [
  {
    id: 1,
    inputText: "heights = [0,1,0,2,1,0,1,3,2,1,2,1]",
    outputText: "6",
    explanation:
      "The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.",
    img: img1.src,
    img_size: 400,
  },
  {
    id: 2,
    inputText: "height = [4,2,0,3,2,5]",
    outputText: "9",
  },
];

const constraints = `
<li class='mt-3 text-sm'>
<code>n == height.length</code>
</li> 
<li class='mt-3 text-sm'>
<code>2 ≤ n ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-3 text-sm'>
<code>0 ≤ height[i] ≤ 10<sup>5</sup></code>
</li>  
`;

const starterCode = `/**
* @param {number[]} height
* @return {number}
*/
var trap = function(height) {
  // Write your code here
};`;

const solution = {
  solution: `var trap = function(height) {
  let left = 0,
    right = height.length - 1,
    left_max = 0,
    right_max = 0,
    water = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > left_max) left_max = height[left];
      else water += left_max - height[left];
      left++;
    } else {
      if (height[right] > right_max) right_max = height[right];
      else water += right_max - height[right];
      right--;
    }
  }
  return water;
};`,
  time_complexity: `n`,
  space_complexity: `1`,
};

// checks if the user has the correct code
const handle_trap = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const heights = [
      [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      [4, 2, 0, 3, 2, 5],
    ];

    const answers = [6, 9];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < heights.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(heights[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("ContainsDuplicate handler function error");
    throw new Error(error);
  }
};

export const TrappingRainWater: Problem = {
  order: 8,
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Two Pointers",
  problemStatement: problemStatement,
  examples: examples,
  constraints: constraints,
  starterCode: starterCode,
  solution: solution,
  starterFunctionName: "trap(height)",
  handlerFunction: handle_trap,
};
