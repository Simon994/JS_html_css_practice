snail = function(arr) {
  let newArr = [], x = 0, y = 0;
  if (arr.length === 1) return arr[0];

 while(arr[y][x]){
      if (arr.length === 1){
      newArr.push(parseInt(arr[0])); 
      return newArr; 
      }
      moveHoz('right');
      moveVert('down');
      for (let j = 0; j<=y; j++){
        spliceArr(arr, 'down', j);
      }
      x--;
      moveHoz('left');
      y--;
      if (arr.length === 0) return newArr;
      let yTemp = y;
      moveVert('up');
      for (let j=yTemp; j>=y; j--){
        spliceArr(arr, 'up', j);
      }
  }

      function moveHoz(direction){
        while(arr[y][x]){
        newArr.push(arr[y][x]);
        (direction === 'right')? x++ : x--;
        };
        (direction === 'right')? x-- : x++;
        spliceArr(arr, direction); 
      }

      function moveVert(direction){
        let xCheck;
        switch(direction) {
          case 'down':
            xCheck = x-1;
            break;
          case 'up':
            xCheck = x;
            break;
        }
        while(arr[y][x]){
            newArr.push(arr[y][x]);
        if (y === xCheck) break;
        (direction === 'down') ? y++ : y--;
        };
      }
      
      function spliceArr(arr, dir, j){
      return (dir === 'right' || dir === 'left') ? arr.splice(y,1) : arr[j].splice(x,1);
      }
}





//console.log(snail([[]]));
//console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
//console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));// , [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);