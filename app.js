
let num=10;
let sum=0;
while (num<100) {
    if (num%2!=0) {
        sum+=num;
    }
    num++;
}
console.log("Sum = "+sum);      //Task1


let number=+prompt("Enter the number: ");
let num2=100;
let sum2=0;
while (num2<=1000) {
    if (num2%number==0) {
        sum2+=num2;
    }
    num2++;
}
console.log("Sum2 = "+sum2);        //Task2


