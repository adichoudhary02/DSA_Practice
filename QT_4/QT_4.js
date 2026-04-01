/**
 * Problem Statement:
 * 
 * Jack wants to count how many Sundays occur in N days,
 * given the starting day of the month.
 * 
 * Input:
 * - startDay (string): "mon", "tue", ..., "sun"
 * - n (integer): next number of days
 * 
 * Output:
 * - number of Sundays in those next n days
 * 
 * Example:
 * Input: startDay = "mon", n = 13
 * Output: 2
 * 
 * Explanation:
 * mon → first Sunday after next 6 days
 * remaining days allow one more Sunday
 */

function countSundays(startDay, n) {
    // let weekDay = ['sun', 'sat', 'fri', 'thu', 'wed', 'tue', 'mon'];
    // let dayIndex = 0, sundays = 0;

    // for(let i = 0; i<weekDay.length; i++){
    //     if(weekDay[i] == startDay){
    //         dayIndex = i;
    //     }
    // }
    // if ((n = n-dayIndex) > 0) 
    //     sundays++;

    // while(n >= 7){
    //     sundays++;
    //     n -= 7;
    // }

    // return sundays;

    let map = new Map();
    map = {
        'mon': 0,
        'tue': 1,
        'wed': 2,
        'thu': 3,
        'fri': 4,
        'sat': 5,
        'sun': 6
    }

    let dayIndex = map[startDay];

    let offset = 6 - dayIndex;

    return offset >= n? 0: 1 + Math.floor((n - offset -1)/7);
}

module.exports = { countSundays };