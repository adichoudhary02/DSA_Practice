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
