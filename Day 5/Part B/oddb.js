let oddb=(arr)=>{
    let odd=[];
    for(let i in arr)
   {
       if(arr[i]%2!==0){
           odd.push(arr[i]);
   }
}
       console.log(odd);    
}
console.log(oddb([1, 2, 5, 7,8,9]));

