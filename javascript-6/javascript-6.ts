function largestOfFour(arr : number[][]) : number[][] {
    let arrMax = [];
  
    for (let i = 0; i < arr.length; i++) {
  
      let max: number = 0;
  
      for (let x = 0; x < arr[i].length; x++) {
        if (arr[i][x] > max) {
          max = arr[i][x];
        }
      }
  
      arrMax.push(max);
    }
  
    return arrMax;
  
    
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  