function reverseString(str : string) : string {
  
    let res = ((str.split("")).reverse()).join('');
   
    return res;
  }
  
  reverseString("hello");