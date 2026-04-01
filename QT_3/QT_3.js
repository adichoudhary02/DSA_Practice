/**
 * Problem Statement:
 * 
 * Given a positive integer N,
 * 
 * 1. Convert it to binary representation
 * 2. Toggle all bits (including MSB)
 * 3. Return the decimal value of the toggled binary
 * 
 * Example:
 * Input: 10
 * Binary: 1010
 * Toggle: 0101
 * Output: 5
 * 
 * Constraints:
 * 1 <= N <= 100
 */

function toggleBits(n) {
    let bigMultiple = 2;
    while(bigMultiple<=n){
        bigMultiple*=2;
    }
    return (bigMultiple-1)-n;

}

module.exports = { toggleBits };