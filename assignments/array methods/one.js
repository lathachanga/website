/*function vowel(string){
    let newString=""
    for(let i=0;i<string.length;i++){
        if(string[i] != "a" && string[i]!="e"&&string[i]!="i"&&string[i]!="o"&&string[i]!="u"){
            return newString+=string[i]
        }
    }
}
 console.log(vowel("Srilatha"))

 var str="Srilatha"
 let res=str.split('')
 for(let i=0;i<res.length;i++){
    if(res[i]=='a'&&res[i]=='e'&&res[i]=='i'&&res[i]=='o'&&res[i]=='u'){
       let arr =res[i].pop
    
    }
    else{
        let string=res[i]
    }
 }*/

var string=["srilatha","sandhya","usha","manasa"]
for(a of string){
    console.log(a.replace(/[aeiou]/gi, ""))
}






