const prompt=require("prompt-sync")();
//armstrong number
var num=prompt("Enter a number \n");
let n=num;
let a=0;
while(n>0)
{
    var b=n%10;
    a=a+b*b*b;
    n=parseInt(n/10);//converting float into integer
}
if(a==num)
{
    console.log("Armstrong number");
}
else{
    console.log(" not an Armstrong number");
}