var num1=10,num2=20,num3=15;
// print second largest number among these three numbers.
if(num1>=num2 && num1>=num3){
    if(num2>=num3){
        console.log("second largest number is num2= " +num2);

    }
    else{
        console.log("second largest number  is num3= "+num3);
    }
}
else if(num2>=num1 && num2>=num3){
 if(num1>=num3){
     console.log(" second largest number is num1= "+num1);
 }
 else{
     console.log(" second largest number is num3= "+num3);
 }
}
else if(num3>=num1 && num3>=num2){
    if(num1>num2){
        console.log("second largest number is num1= "+num1);
    }
else{
    console.log("second largest number is num2 = "+num2);
}
}
else{
    console.log("invalid");
}


    



// else if(num2>num3){
//     console.log("num2 is second largest");
// }
// else{
//     console.log("num3 is largest");
// }