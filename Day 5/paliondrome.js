let paliondrome=function(word){
    let len=word.length;
    let start=word.substring(0,Math.floor(len/2));
    let end=word.substring(len -Math.floor(len/2));
    let flip=end.split('').reverse().join('')
    return (start===flip);
}
console.log(paliondrome('radar'))
