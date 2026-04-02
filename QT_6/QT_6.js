/**
 * Problem Statement:
 * 
 * Given an array Arr of size N,
 * count elements that are greater than all previous elements.
 * 
 * Note:
 * - First element is always counted
 * 
 * Example:
 * Input: [7,4,8,2,9]
 * Output: 3  (7, 8, 9)
 */

function countGreaterThanPrevious(arr) {
    let largest = -Infinity;
    let count = 0;
    for(num in arr){
        if(arr[num] > largest){
            largest = arr[num];
            count++;
        }
    }
    return count;

}

module.exports = { countGreaterThanPrevious };