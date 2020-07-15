
let newArr = [];
  function checkIfCoordExists(array, yCoord, xCoord) {
    return (array[yCoord][xCoord]) ? true : false;
  }

  function pushToNewArr(arr, y, x){
    newArr.push(arr[y][x]);
  }

snail = function(arr) {
  
  let x = 0;
  let y = 0;
  let counter = 0;
  if (arr === []) return [];
  if (arr.length === 1) return arr[0];

  
  while(checkIfCoordExists(arr, y, x)){
  
  if (arr.length === 1){
    let finalNum = parseInt(arr[0])
    newArr.push(finalNum); 
   return newArr;
    
  }
    //move right
  
  while(checkIfCoordExists(arr, y, x)){
    
    
    pushToNewArr(arr, y, x);
        x++;
        };

       x = x-1;
      

     arr[y].splice(0, x+1);
     arr.splice(y,1);
    
     
    // y = y+1;
      
    // yTempDown = (y+counter);
  //move down

    while(arr[y][x] !== undefined){
      newArr.push(arr[y][x]);
      if (y === x-1){
        break;
      }
      y++;
    };
   
   
    
   for (let j = 0; j<=y; j++){
    arr[j].splice(x,1);
     
    }
   
    //move left
    x = x-1;
    xTemp = x+1;
    
    while(arr[y][x] !== undefined){
       newArr.push(arr[y][x]);
       x--;
    };

    x = x+1;
    
    
    arr.splice(y,1);
   //arr[y].splice(0, xTemp);
      
    y--;

    

    if (arr.length === 0) return newArr;
    //move up
   let yTemp = y;
    while(arr[y][x] !== undefined){
      newArr.push(arr[y][x]);
      if (y === x){
        break;
      }
      y--;
    };
   
   
    for (let j=yTemp; j>=y; j--){
       arr[j].splice(x,1);
       
    }
   
    y = 0;
    x = 0;
    counter++;
  }
  

}





//console.log(snail([[1]]));
//console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
//console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));// , [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);