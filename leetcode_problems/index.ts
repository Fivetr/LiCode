import { Problem } from "@/types";
import {
  twoSum,
  ContainsDuplicate,
  ValidAnagram,
  GroupAnagrams,
  TopKFrequentElements,
  ProductOfArrayExpectSelf,
  ValidSudoku,
  LongestConsectiveSequence,
} from "./problems/Hashing";
import {
  validParentheses,
  EvaluateReversePolishNotation,
  GenerateParentheses,
  DailyTemperatures,
  CarFleet,
  LargestRectangleinHistogram,
  AsteroidCollision,
  DecodeString,
  SimplifyPath,
  RemovingStarsFromAString,
} from "./problems/Stack";
import {
  ValidPalindrome,
  TwoSum2,
  ThreeSum,
  ContainerWithMostWater,
  TrappingRainWater,
  IsSubsequence,
  SquaresOfASortedArray,
  ThreeSumClosest,
} from "./problems/Two_Pointers";
import {
  BinarySearch,
  Search2DMatrix,
  KoKoEatingBananas,
  FindMinimumInRotatedSortedArray,
  SearchInRotatedSortedArray,
  MedianOfTwoSortedArrays,
  FindPeakElement,
  FindFirstAndLastPositionOfElementInSortedArray,
  KthSmallestElementInASortedMatrix,
} from "./problems/Binary_Search";
import {
  BestTimeToBuyAndSellStock,
  LongestSubstringWithoutRepeatingCharacters,
  LongestRepeatingCharacterReplacement,
  PermutationInString,
  MinimumWindowSubstring,
  SlidingWindowMaximum,
  BestTimeToBuyAndSellStock2,
  ContainsDuplicate2,
  MaximumAverageSubarray,
  FruitsIntoBasket,
  MinimumSizeSubarraySum,
  MaximumNumberOfVowels,
  MaxConsecutiveOnes,
  SubarrayProductLessThanK,
  LongestSubarrayDeletingOneElement,
} from "./problems/Sliding_Window";
import {
  ReverseLinkedList,
  MergeTwoSortedLists,
  LinkedListCycle,
  RemoveNthNodeFromEndOfList,
  AddTwoNumbers,
  FindTheDuplicateNumber,
  MiddleOfTheLinkedList,
  RemoveDuplicatesFromSortedList,
  RemoveLinkedListElement,
  PalindromeLinkedList,
  ReverseLinkedList2,
  RotateList,
  RemoveDuplicatesFromSortedList2,
  DeletetheMiddleNodeofALinkedList,
  MaximumTwinSumofALinkedList,
  OddEvenList,
} from "./problems/Linked_List";
import {
  LastStoneWeight,
  KClosestPointToOrigin,
  KthLargestElementInAnArray,
  TaskScheduler,
} from "./problems/Heap";
import {
  Subsets,
  Subsets2,
  CombinationSum,
  CombinationSum2,
  Permutations,
  WordSearch,
  PalindromePartitioning,
  LetterCombinationsOfAPhoneNumber,
  NQueens,
} from "./problems/Backtracking";
import {
  NumberOfIslands,
  MaxAreaofIsland,
  PacificAtlanticWaterFlow,
  SurroundedRegions,
  RottingOranges,
  CourseSchedule,
  CourseSchedule2,
  RedundantConnection,
  NumberOfConnectedComponentsInAnUndirectedGraph,
  GraphValidTree,
  WordLadder,
} from "./problems/Graph";

import {
  MaximumSubarray,
  JumpGame,
  JumpGame2,
  GasStation,
  HandOfStraignts,
  MergeTripletoFormTargetTriple,
  PartitionLabels,
  ValidParenthesisString,
} from "./problems/Greedy";
import {
  MeetingRooms,
  MeetingRooms2,
  InsertInterval,
  MergeIntervals,
  NonOverlappingIntervals,
} from "./problems/Intervals";
import {
  ClimbingStairs,
  MinCostClimbingStairs,
  HouseRobber,
  HouseRobber2,
  LongestPalindromicSubstring,
  PalindromicSubstrings,
  DecodeWays,
  CoinChange,
  MaximumProductSubarray,
  WordBreak,
  LongestIncreasingSubsequence,
  PartitionEqualSubsetSum,
} from "./problems/1-D DP";
import {
  UniquePaths,
  LongestCommonSubsequence,
  BestTimeToBuyAndSellStockWithCooldown,
  CoinChange2,
  EditDistance,
  InterLeavingString,
  BurstBalloons,
  DistinctSubsequences,
  RegularExpressionMatching,
} from "./problems/2-D DP";
import {
  HappyNumber,
  PlusOne,
  RotateImage,
  SpiralMatrix,
  SetMatrixZeroes,
  Pow,
  MultiplyString,
} from "./problems/Math";
import {
  InvertBinaryTree,
  MaximumDepthOfBinaryTree,
  DiameterOfBinaryTree,
  SameTree,
  BalancedBinaryTree,
  SubtreeOfAnotherTree,
  LowestCommonAncestor,
  BinaryTreeLevelOrderTraversal,
  BinaryTreeRightSideView,
  countGoodNodes,
  ConstructBinaryTree,
  BinaryTreeMaximumPath,
  KthSmallestElementInBST,
  ValidateBST,
} from "./problems/Tree";
interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "valid-parentheses": validParentheses,
  "vaild-anagram": ValidAnagram,
  "contains-duplicate": ContainsDuplicate,
  "group-anagrams": GroupAnagrams,
  "top-k-frequent-elements": TopKFrequentElements,
  "product-of-array-except-self": ProductOfArrayExpectSelf,
  "valid-sudoku": ValidSudoku,
  "longest-consecutive-sequence": LongestConsectiveSequence,
  "evaluate-reverse-polish-notation": EvaluateReversePolishNotation,
  "generate-parentheses": GenerateParentheses,
  "daily-temperature": DailyTemperatures,
  "car-fleet": CarFleet,
  "largest-rectangle-in-histogram": LargestRectangleinHistogram,
  "valid-palindrome": ValidPalindrome,
  "two-sum-2": TwoSum2,
  "three-sum": ThreeSum,
  "container-with-most-water": ContainerWithMostWater,
  "trapping-rain-water": TrappingRainWater,
  "binary-search": BinarySearch,
  "search-a-2d-matrix": Search2DMatrix,
  "koko-eating-bananas": KoKoEatingBananas,
  "find-minimum-in-rotated-sorted-array": FindMinimumInRotatedSortedArray,
  "search-in-rotated-sorted-array": SearchInRotatedSortedArray,
  "median-of-two-sorted-arrays": MedianOfTwoSortedArrays,
  "best-time-to-buy-and-sell-stock": BestTimeToBuyAndSellStock,
  "best-time-to-buy-and-sell-stock-2": BestTimeToBuyAndSellStock2,
  "longest-substring-without-repeating-characters":
    LongestSubstringWithoutRepeatingCharacters,
  "longest-repeating-character-replacement":
    LongestRepeatingCharacterReplacement,
  "permutation-in-string": PermutationInString,
  "minimum-window-substring": MinimumWindowSubstring,
  "sliding-window-maximum": SlidingWindowMaximum,
  "reverse-linked-list": ReverseLinkedList,
  "merge-two-sorted-lists": MergeTwoSortedLists,
  "last-stone-weight": LastStoneWeight,
  "k-closest-points-to-origin": KClosestPointToOrigin,
  "kth-largest-element-in-an-array": KthLargestElementInAnArray,
  "task-scheduler": TaskScheduler,
  "subsets-2": Subsets2,
  "combination-sum": CombinationSum,
  subsets: Subsets,
  "combination-sum-2": CombinationSum2,
  permutations: Permutations,
  "word-search": WordSearch,
  "palindrome-partitioning": PalindromePartitioning,
  "letter-combinations-of-a-phone-number": LetterCombinationsOfAPhoneNumber,
  "n-queens": NQueens,
  "number-of-islands": NumberOfIslands,
  "max-area-of-island": MaxAreaofIsland,
  "pacific-atlantic-water-flow": PacificAtlanticWaterFlow,
  "surrounded-regions": SurroundedRegions,
  "rotting-oranges": RottingOranges,
  "course-schedule": CourseSchedule,
  "course-schedule-2": CourseSchedule2,
  "redundant-connection": RedundantConnection,
  "number-of-connected-components-in-an-undirected-graph":
    NumberOfConnectedComponentsInAnUndirectedGraph,
  "graph-valid-tree": GraphValidTree,
  "word-ladder": WordLadder,
  "maximum-subarray": MaximumSubarray,
  "jump-game": JumpGame,
  "jump-game-2": JumpGame2,
  "gas-station": GasStation,
  "hand-of-straights": HandOfStraignts,
  "merge-triplets-to-form-target-triplet": MergeTripletoFormTargetTriple,
  "partition-labels": PartitionLabels,
  "valid-parenthesis-string": ValidParenthesisString,
  "meeting-rooms": MeetingRooms,
  "meeting-rooms-2": MeetingRooms2,
  "insert-interval": InsertInterval,
  "merge-intervals": MergeIntervals,
  "non-overlapping-intervals": NonOverlappingIntervals,
  "climbing-stairs": ClimbingStairs,
  "min-cost-climbing-stairs": MinCostClimbingStairs,
  "house-robber": HouseRobber,
  "house-robber-2": HouseRobber2,
  "longest-palindromic-substring": LongestPalindromicSubstring,
  "palindromic-substrings": PalindromicSubstrings,
  "decode-ways": DecodeWays,
  "coin-change": CoinChange,
  "maximum-product-subarray": MaximumProductSubarray,
  "word-break": WordBreak,
  "longest-increasing-subsequence": LongestIncreasingSubsequence,
  "partition-equal-subset-sum": PartitionEqualSubsetSum,
  "unique-paths": UniquePaths,
  "longest-common-subsequence": LongestCommonSubsequence,
  "best-time-to-buy-and-sell-stock-with-cooldown":
    BestTimeToBuyAndSellStockWithCooldown,
  "coin-change-2": CoinChange2,
  "interleaving-string": InterLeavingString,
  "edit-distance": EditDistance,
  "burst-balloons": BurstBalloons,
  "distinct-subsequences": DistinctSubsequences,
  "regular-expression-matching": RegularExpressionMatching,
  "happy-number": HappyNumber,
  "plus-one": PlusOne,
  "rotate-image": RotateImage,
  "spiral-matrix": SpiralMatrix,
  "set-matrix-zeroes": SetMatrixZeroes,
  pow: Pow,
  "multiply-strings": MultiplyString,
  "linked-list-cycle": LinkedListCycle,
  "remove-nth-node-from-end-of-list": RemoveNthNodeFromEndOfList,
  "add-two-numbers": AddTwoNumbers,
  "find-the-duplicate-number": FindTheDuplicateNumber,
  "invert-binary-tree": InvertBinaryTree,
  "maximum-depth-of-binary-tree": MaximumDepthOfBinaryTree,
  "diameter-of-binary-tree": DiameterOfBinaryTree,
  "balanced-binary-tree": BalancedBinaryTree,
  "same-tree": SameTree,
  "subtree-of-another-tree": SubtreeOfAnotherTree,
  "lowest-common-ancestor-of-a-binary-search-tree": LowestCommonAncestor,
  "binary-tree-level-order-traversal": BinaryTreeLevelOrderTraversal,
  "binary-tree-right-side-view": BinaryTreeRightSideView,
  "count-good-nodes-in-binary-tree": countGoodNodes,
  "validate-binary-search-tree": ValidateBST,
  "kth-smallest-element-in-a-bst": KthSmallestElementInBST,
  "construct-binary-tree-from-preorder-and-inorder-traversal":
    ConstructBinaryTree,
  "binary-tree-maximum-path-sum": BinaryTreeMaximumPath,
  "find-peak-element": FindPeakElement,
  "find-first-and-last-position-of-element-in-sorted-array":
    FindFirstAndLastPositionOfElementInSortedArray,
  "kth-smallest-element-in-a-sorted-matrix": KthSmallestElementInASortedMatrix,
  "asteroid-collision": AsteroidCollision,
  "decode-string": DecodeString,
  "simplify-path": SimplifyPath,
  "removing-stars-from-a-string": RemovingStarsFromAString,
  "is-subsequence": IsSubsequence,
  "squares-of-a-sorted-array": SquaresOfASortedArray,
  "3sum-closest": ThreeSumClosest,
  "contains-duplicate-2": ContainsDuplicate2,
  "maximum-average-subarray": MaximumAverageSubarray,
  "fruits-into-basket": FruitsIntoBasket,
  "minimum-size-subarray-sum": MinimumSizeSubarraySum,
  "maximum-number-of-vowels-in-a-substring-of-given-length":
    MaximumNumberOfVowels,
  "max-consecutive-ones-3": MaxConsecutiveOnes,
  "subarray-product-less-than-k": SubarrayProductLessThanK,
  "longest-subarray-of-1's-after-deleting-one-element":
    LongestSubarrayDeletingOneElement,
  "middle-of-the-linked-list": MiddleOfTheLinkedList,
  "remove-duplicates-from-sorted-list": RemoveDuplicatesFromSortedList,
  "remove-linked-list-element": RemoveLinkedListElement,
  "palindrome-linked-list": PalindromeLinkedList,
  "reverse-linked-list-2": ReverseLinkedList2,
  "rotate-list": RotateList,
  "remove-duplicates-from-sorted-list-2": RemoveDuplicatesFromSortedList2,
  "delete-the-middle-node-of-a-linked-list": DeletetheMiddleNodeofALinkedList,
  "maximum-twin-sum-of-a-linked-list": MaximumTwinSumofALinkedList,
  "odd-even-linked-list": OddEvenList,
};
