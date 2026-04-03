/**
 * Problem Statement:
 * 
 * Given a string consisting of 'a' and 'b',
 * divide it into substrings of length L.
 * 
 * The last substring may be smaller if remaining chars exist.
 * 
 * Return the maximum count of 'a' in any substring.
 * 
 * 
 * Example:
 * Input: "bbbaaababa", L = 3
 * Output: 3
 */

function maxAquaCurtains(str, L) {
    let maxAs = 0, tempCount = 0;
    let stringLength = str.length;
    for(let i = 0; i<stringLength;i++){
        if(str[i] == 'a'){
            tempCount++;
        }
        if(( i+1 )% L == 0){
            if(maxAs<tempCount){
                maxAs = tempCount;
            }
            tempCount = 0;
        }
    }
    return maxAs<tempCount? tempCount: maxAs;
}

module.exports = { maxAquaCurtains };