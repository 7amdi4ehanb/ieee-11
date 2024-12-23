// task-1
var x;
console.log("Odd Numbers Is:");
for (x = 0; x <= 10; x++){
  if (x % 2 != 0);
  console.log(x);    
}

console.log("===================");

// task-2
var y;
for (y = 1; y <= 40; y++){
  if (y % 3 == 0) {
    console.log(y + " Fizz");
  }
  else if(y % 5 == 0){
    console.log(y + " Buzz");
  }
  else if(y % 5 == 0 && y % 3 == 0){
    console.log(y + " FizzBuzz");
  }
  else {
    console.log(y);
  }
}