//WAP to check a given number is armstrong number or not
let number=153
let sum=0
let temp= number
while(temp>0){
    let remainder=temp%10
    sum=sum+remainder*remainder*remainder
    temp=parseInt(temp/10)
}
if(sum==number){
    console.log("Given number is armstrong number")
}else{
    console.log("Given number is not an armstrong number")
}
