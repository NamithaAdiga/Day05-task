var greet=function(str){
  return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(greet("i'm a little tea pot"));
 