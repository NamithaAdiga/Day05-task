var greet=(str)=>{
    return str.toLowerCase().split(' ').map((word)=> {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
    }
    console.log(greet("i'm a little tea pot"));
