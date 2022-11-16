function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
 }
 
 function gcd_two_numbers(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     let t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 console.log(lcm_two_numbers(6, 13));