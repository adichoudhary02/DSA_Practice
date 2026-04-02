/**
 * Problem Statement:
 * 
 * Given an array of size N containing only 0s, 1s, and 2s,
 * sort the array in ascending order.
 * 
 * Constraint:
 * - Try to do it in-place
 * - Avoid using built-in sort
 * 
 * Example:
 * Input: [1,0,2,0,1,0,2]
 * Output: [0,0,0,1,1,2,2]
 */

function sortByRisk(arr) {
    let low = 0, i = 0, high = arr.length - 1;

    while (i <= high) {
        if (arr[i] === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            low++;
            i++;
        } 
        else if (arr[i] === 2) {
            [arr[i], arr[high]] = [arr[high], arr[i]];
            high--;
        } 
        else {
            i++;
        }
    }

    return arr;
}

module.exports = { sortByRisk };