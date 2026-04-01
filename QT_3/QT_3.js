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

// let binNum = 0;
// let binNum2 = 0

// function binaryNum(n, dig=1){
//         if(n>0){
//             binNum = binNum + (n%2)*dig;
//             return binaryNum(Math.floor(n/2),dig*=10);
//         }
//         return binNum;
//     }

// function toggleBinaryBits(n, dig=1){
//     if(n>0){
//         binNum2 = binNum2 + (((n+1)%2)%10)*dig;
//         return toggleBinaryBits(Math.floor(n/10),dig *= 10);
//     }
//     return binNum2;
    
// }

// function binaryToDec(n){
//     let decNum = 0, dig = 1;
//     while(n>0){
//         decNum = decNum + (n%10)*dig;
//         dig = 2*dig;
//         n = Math.floor(n/10);
//     }
//     return decNum;
// }

function toggleBits(n) {
    //Approach 1
    {/*let bigMultiple = 2;
    while(bigMultiple<=n){
        bigMultiple*=2;
    }
    return (bigMultiple-1)-n;*/}

    //Approach 2
    // binNum = 0;
    // binNum2 = 0;

    // n = binaryNum(n);
    // n = toggleBinaryBits(n);
    // n = binaryToDec(n);

    // return n;
    
    //Approach 3: Optimal

    let power = 1;

    while(n>=power){
        power = power<<1;
    }

    return n ^ (power-1);
    
}

module.exports = { toggleBits };