var num1=10,num2=20,num3=15;
//print lowest among three numbers

if((num1<=num2) && (num1<=num3)){
    console.log("lowest among three numbers is " + num1);
}
else if((num2<=num1) && (num2<=num3)){
    console.log("lowest among three numbers is "+ num2);
}
else{
    console.log("lowest among three numbers is " + num3);
}