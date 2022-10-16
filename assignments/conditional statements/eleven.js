//WAP to print the given 3 numbers in ascending order?
let a=94
let b=13
let c=19
if(a<b&&a<c){
    if(b<c){
        console.log(a +","+b+","+c+"," )
    }
    else{
        console.log(a +","+c+","+b+"")
    }
}else if(b<a&&b<c){

    if(a<c){
        console.log(b+","+a+","+c+"")
    }
    else{
        console.log(b+","+c+","+a+"")
    }
}else if(c<a&&c<b){

    if(a<b){
        console.log(c+","+a+","+b+"")
    }
    else{
        console.log(c+","+b+","+a+"")
    }
}