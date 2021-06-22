
const arr=[1,2,3,4,5,6,7,8,9]
//even
Array.prototype.even=function(){
    const arr=[];
    for(let key of this){
        if(key%2==0){
            arr.push(key);
        }
    }
    return arr;
}
const evenArray= arr.even()
console.log(evenArray)

//odd
Array.prototype.odd=function(){
    const arr=[];
    for(let key of this){
        if(key%2!==0){
            arr.push(key);
        }
    }
    return arr;
}
const oddArray= arr.odd()
console.log(oddArray)

