function factorialize(num : number) : number {
    let j = 1;
   for(let i = 1; i <= num ; i++ ) {
     j = j * i;
   }
   return j;
   
 }
 factorialize(5);