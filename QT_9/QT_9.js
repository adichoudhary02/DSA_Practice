/**
 * Problem Statement:
 * 
 * Given a number N and integer R:
 * 
 * 1. Sum digits of N
 * 2. Repeat this sum R times (i.e., multiply sum by R)
 * 3. Reduce result to a single digit
 * 
 * If R = 0 → return 0
 * 
 * Example:
 * Input: N = 99, R = 3
 * Output: 9
 */
function digitSum(number){
    let sum = 0;
    while(number>0){
        sum = sum + number%10;
        number = Math.floor(number/10);
    }
    return sum;
}

function mysteriousSum(N, R) {
    let finalSum = 0;
    finalSum = R * digitSum(N);
    while(finalSum%10 != finalSum){
        finalSum = digitSum(finalSum);
    }
    return finalSum;

}

module.exports = { mysteriousSum };