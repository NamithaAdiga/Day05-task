
let median=function(arr1,arr2){
    let arr = [...arr1,...arr2]
    arr.sort((a,b)=> a-b)
    console.log(arr.sort((a,b)=> a-b))
    let medianIndex = Math.floor(arr.length / 2)
    return median = arr.length % 2 === 1 ? arr[medianIndex] : (arr[medianIndex-1]+arr[medianIndex]) / 2
}
const arr1 = [1,3,5,7]
const arr2 = [2,4,6,8]
console.log(median(arr1,arr2))


                                            