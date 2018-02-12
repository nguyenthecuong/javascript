function reverseString(str) {
  
    var res = ((str.split("")).reverse()).join('');
   
    return res;
  }
  
  reverseString("hello");