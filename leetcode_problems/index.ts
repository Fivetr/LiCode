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
} from "./problems/Stack";
import {
  ValidPalindrome,
  TwoSum2,
  ThreeSum,
  ContainerWithMostWater,
  TrappingRainWater,
} from "./problems/Two_Pointers";
import {
  BinarySearch,
  Search2DMatrix,
  KoKoEatingBananas,
  FindMinimumInRotatedSortedArray,
  SearchInRotatedSortedArray,
  MedianOfTwoSortedArrays,
} from "./problems/Binary_Search";
import {
  BestTimeToBuyAndSellStock,
  LongestSubstringWithoutRepeatingCharacters,
  LongestRepeatingCharacterReplacement,
  PermutationInString,
  MinimumWindowSubstring,
  SlidingWindowMaximum,
  BestTimeToBuyAndSellStock2,
} from "./problems/Sliding_Window";
import { ReverseLinkedList, MergeTwoSortedLists } from "./problems/Linked_List";
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
  MinimumInterval,
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
  "minimum-interval-to-include-each-query": MinimumInterval,
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
};
