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
    let weekDay = ['sun', 'sat', 'fri', 'thu', 'wed', 'tue', 'mon'];
    let dayIndex = 0, sundays = 0;

    for(let i = 0; i<weekDay.length; i++){
        if(weekDay[i] == startDay){
            dayIndex = i;
        }
    }
    if ((n = n-dayIndex) > 0) 
        sundays++;

    while(n >= 7){
        sundays++;
        n -= 7;
    }

    return sundays;
}

module.exports = { countSundays };