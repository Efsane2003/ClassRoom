//////////// 1 ///////////////
let myText=
"An Array is a collection of items of same data type stored at contiguous memory locations."
let countA=0;
for(let i=0; i<myText.length;i++){
    if(myText[i].toLowerCase()==="a"){
        countA++;
    }
}
console.log(countA)
///////////// 2 ///////////////
let sum=0;
const arr1=[1,2,4,5,7,9,13,22]
for(let i=0; i<arr1.length; i++){
    sum+=arr1[i];
   
}
console.log(sum)

///////////////////// 3 ///////////////////
const arr2=[false, 0,2,true,23 ,undefined, 'are u stack?','come on'];
for(let i=0; i<arr2.length; i++){
    if([i]%2==1){
        console.log(arr2[i])
    }
}
/////////////////// 4 ////////////
let newText="";
let text1="How is it going";
for(let i=0; i<text1.length;i++){
   if(text1[i]!="i"){
    console.log(text1[i])
   }
}
//////////////// 5 /////////////
const numbersArr=[2, false,'5', 'true', 9 , 0 ,'1'];
let SUM=0;
for(let i=0; i<numbersArr.length; i++){
   if(typeof numbersArr[i]==="number"){
    SUM+=numbersArr[i]
}
}
console.log(SUM)
///////////////////// 6 ////////////
const mixType=[ 1,'3', 4, false, null , 22 , true];
let value=[];
for(let i=0; i<mixType.length;i++){
    value.push(String(mixType[i]))

}
console.log(value);


