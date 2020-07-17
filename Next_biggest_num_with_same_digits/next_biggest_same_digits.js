


function nextBigger(num){
  const arr = num.toString().split('');


  function compare(arr, p = arr.length-1){
    let l = p-1;
    if(p === 0) {
      console.log(-1);
      return -1;
    }


    for (let i=l; i>=0; i--){
     
      let tempArr = num.toString().split('');
      let moving = tempArr[p];
      tempArr[p] = tempArr[i];
      tempArr[i] = moving;
      //console.log(`tried swapping pointer ${p} with left-bound. temp array: ${tempArr}`);
      if (tempArr.join('') > arr.join('')){
        console.log(`found greater number, with p at ${p}. Number: ${tempArr.join('')}`);
        return parseInt(tempArr.join(''),10)
      } 

    }

    //console.log(`swaps fully tried at p: ${p}. Moving pointer to: ${p-1}`);

    compare(arr, p-1)

    //base case
   

  }


  compare(arr);



}

nextBigger(144); // should be 414
//nextBigger(414); // should be 441

// function nextBigger(num){

//   const arr = num.toString().split('');
//   const arrOriginal = num.toString();
//   let length = arr.length-1;

//   for (i=1; i<arr.length; i++){
//     console.log(`number: ${arr.join('')}. swapping index ${length} (number: ${arr[length]}) and index ${length-i} (number: ${arr[length-i]})`)
//     let moving = arr[length];
//     arr[length] = arr[length-i];
//     arr[length-i] = moving;
    
//     if (arr.join('') > arrOriginal){
//       console.log(arr.join(''));
//     } else {
//       console.log(`new number (${arr.join('')}) is NOT greater than original`)

//     }


//   }


// }

// //extBigger(531);
// nextBigger(1431);









// function nextBigger(num) {

//   const arr = num.toString().split('');
//   let permutedArr = [];
//   function swap(arr, a, b){
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//     return arr;
//   }

//   function heapPermutations(arr, n = arr.length){
//     if (n===1){
//       permutedArr.push(arr.join(''));;
//     } else {
//       for (let i=1; i<=n; i++){
        
//         heapPermutations(arr, n-1);
//         if(n%2){
//           swap(arr, 0, n-1);
//         } else {
//           swap(arr, i-1, n-1);
//         }
//       }
//     }

//   }

//   heapPermutations(arr);
//   permutedArr = [...new Set(permutedArr)];
//   let indexOfNum = permutedArr.sort().indexOf(num.toString());
//   return parseInt(permutedArr[indexOfNum+1], 10);

// }


// console.log(nextBigger(2017));
