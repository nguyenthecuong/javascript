function palindrome (str:string): boolean {
    let normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
    let reverseStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reverseStr;
    
  }
  palindrome("eye");