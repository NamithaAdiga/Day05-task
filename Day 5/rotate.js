let leftrotate=function(arr,rotations){
    const rotatedarray=arr.concat();
    for(let i=0;i<rotations;i++){
        const frontitem=rotatedarray.shift();
        rotatedarray.push(frontitem);
    }
         return rotatedarray;
}
const numrotation=4;
const samplearray=[1,2,3,4,5]
console.log(leftrotate(samplearray,numrotation))