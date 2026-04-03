/**
 * Problem Statement:
 * 
 * Given an integer N,
 * compute the product of all its digits.
 * 
 * Example:
 * Input: 5244
 * Output: 160   (5 * 2 * 4 * 4)
 */

function productOfDigits(n) {
    let product = 1;

    if(n == 0) return 0;
    while(n>0){
        product *= n%10;
        n = Math.floor(n/10);
    }
    return product;

    {/*function productOfDigits(n) {
    return n.toString().split('').reduce((acc, d) => acc * Number(d), 1);
    }*/}

}

module.exports = { productOfDigits };