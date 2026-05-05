
const sum = require('./sum.js');

if (sum(2,3) !==5){
  throw new Error("Test failed: sum(2,3) deberia ser 5);
}
console.log("Test Passed");
if (sum(10, 5) !==15){
  throw new Error("Test failed: sum(2,3) deberia ser 5);
}
console.log("Test Passed");
if (sum(-5, 5) !==0){
  throw new Error("Test failed: sum(2,3) deberia ser 5);
}
console.log("Test Passed");

if (sum(-10, -5) !==-15){
  throw new Error("Test failed: sum(2,3) deberia ser 5);
}
console.log("Test Passed");
