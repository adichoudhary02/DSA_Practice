/**
 * Problem Statement:
 * 
 * A chocolate factory is packing chocolates into packets.
 * The packets are represented as an array of N integers.
 * 
 * Task:
 * Move all empty packets (0s) to the end of the array
 * while maintaining the order of non-zero elements.
 * 
 * Example 1:
 * Input: [4,5,0,1,9,0,5,0]
 * Output: [4,5,1,9,5,0,0,0]
 * 
 * Example 2:
 * Input: [6,0,1,8,0,2]
 * Output: [6,1,8,2,0,0]
 * 
 * Constraint:
 * - Do it in-place if possible (important for optimization discussion later)
 */

function moveZeros(arr) {
    /* let pt1 = 0, pt2 = 0;
    let zerosCount = 0;

    for(pt1 = 0; pt1 < arr.length-1; pt1++){
        if(arr[pt1] != 0) continue;

        if(pt2 <= pt1) pt2 = pt1 + 1;
        while(arr[pt2] == 0){
            pt2++;
            if(pt2 >= arr.length)
                return arr;
        }
        arr[pt1] = arr[pt2];
        arr[pt2] = 0;
    }
    return arr; */
    let insertpos = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            arr[insertpos] = arr[i];
            insertpos++;
        }
        
    }

    if(insertpos < arr.length){
        for(let i = insertpos; i<arr.length; i++){
            arr[i] = 0;
        }
    }
    return arr;

}

module.exports = { moveZeros };