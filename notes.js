// To find length of number 
let n = 123943;
numLength = n.toString().length;

//if we neeed to flip the bits till MSB
//We cant use XOR ~ here because if we do that then it would flip all 32 bit in memory 0000001010 all leading zeros too
//Solution we create a mask and then use it by XORign it with the number it would result in right answer

//if we do this this multiplies a number by two in effective way 
n = n<<1; //`<<` this multiplies it by two
n = n>>2; //this divise by 3 twice  `10101` becomes `101` 

//Result is always in the decimal formate...

//n^b this convers all the decimal number into the binary then takes xors and then conver the result back to decimal..

//How to create map and then use them with key value pair// ablity to find them in O(1)
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

// to swap items in the js 
[arr[i], arr[low]] = [arr[low], arr[i]]

for(num in arr); //=>This implies that the num is the strings of the indexs of array
for(num of arr); //=>This implies that the num is the element itself of the array

//String works as an array in js too
for (let i = 0; i<String.length; i++){
    console.log(string[i]);
}

//Digital rool = when a numbers digits are added untill a single digit is left, 
//number % 9 = <'sum of digits'>%9;