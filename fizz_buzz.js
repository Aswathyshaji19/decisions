var num=15;
// print fizz if num/ by 3
//print buzz if num/ by 5
//print fizzbuzz if num /15
// if(num%15==0){
//     console.log("fizzbuzz");
// }
// else if(num%5==0){ //25 %5==0
//     console.log("buzz");
// }
// else if(num%3==0){
//     console.log("fiz");
// }

// ternary method
// console.log(num%15==0?"fizzbuzz":num%5==0?"buzz":num%3==0?"fizz":"invalid");
// another method
var num=15;
var res="";
if(num%3==0){
    res+="fizz";
}
 if(num%5==0){
    res+="buzz";
}
console.log(res);