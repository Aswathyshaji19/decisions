var num1=10,num2=20,num3=15;
// sort these three numbers with out using  any functions
if(num1>=num2 && num1>=num3)
{
    if(num2>=num3)
    {
        console.log( "Descending order " + num1,num2,num3);
 
    }
    else{

    console.log("Descending order " + num1,num3,num2);

    }
}


else if(num2>num1 && num2>num3){

    if(num1>num3){
        console.log("Descending order " +num2,num1,num3);

    }
    else{
        console.log("Descending order " + num2,num3,num1);

    }
}

else if(num3>num1 && num3>num2)
{
    if(num1>num2){
        console.log("Descending order " +num3,num1,num2);

    }
    else{
        console.log("Descending order " +num3,num2,num1);

    }
}
else{
    console.log("invalid");
}




