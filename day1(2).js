//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function check(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(check(50, 50))
console.log(check(10, 20))
console.log(check(20, 40))
console.log(check(40, 10))
console.log(check(30, 20))
console.log(check(25, 20))
