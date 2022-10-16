//WAP to print reverse of digits of numbers  (using while loop)
let a=3846
let rev=0
let rem;
console.log("Original number:",a)
while(a!=0){
    rem=a%10;
    rev=rev*10+rem;
    a=parseInt(a/10);

}
console.log("Reverse number:",rev)

//WAP to print reverse of digits of numbers  (using do while loop)
let i=3846
let re=0
let remm;
console.log("Original number:",i)
do{
    remm=i%10;
    re=re*10+remm;
    i=parseInt(i/10);

}while(i!=0)
console.log("Reverse number:",re)


