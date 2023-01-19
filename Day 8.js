//Finding the sum of all elements in an array with the help of loops
var arr = [10,20,30, 40,50];
var sum = 0;
for (let i in arr) {
  sum += arr[i];
}
document.write(sum);
