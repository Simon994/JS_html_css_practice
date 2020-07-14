

function permutations(str) {

  const arr = str.split('');
  let permutedArr = [];
  function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
  }



  function heapPermutations(arr, result, n = arr.length){
    
    if (n===1){
      result(arr);
    } else {
      for (let i=1; i<=n; i++){
        
        heapPermutations(arr, result, n-1);
        if(n%2){
          swap(arr, 0, n-1);
        } else {
          swap(arr, i-1, n-1);
        }
      }
      
    }

  }

  const result = function (input){
    console.log(input)
  }

  heapPermutations(arr, result);
 

}


permutations('abcd');







// function permutations(str) {
  
//   const arr = str.split('');
//   const permutationsArr = []; 
//    if (arr.length === 1) return arr;

//   // for (let j=0; j<arr.length; j++){
//     for(let i=0; i<arr.length-1; i++){
//       swap(i, i+1);
//       console.log(arr);
//        // permutationsArr.push(arr.join(''));
//     }
//     for (let k=(arr.length-1); k>0; k--){
//        swap(k, k-1);
//         console.log(arr);
//        //permutationsArr.push(arr.join(''));
//     }

//   // }

//   function swap(a, b){
//     if(arr[a] === arr[b]) return;
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//     return arr

//   }
 
//   const removedDuplicates = [...new Set (permutationsArr)];
//   return (removedDuplicates);
// }











// '[\'abcd\', \'abdc\', \'acbd\', \'acdb\', \'adbc\', \'adcb\', \'bacd\', \'badc\', \'bcad\', \'bcda\', \'bdac\', \'bdca\', \'cabd\', \'cadb\', \'cbad\', \'cbda\', \'cdab\', \'cdba\', \'dabc\', \'dacb\', \'dbac\', \'dbca\', \'dcab\', \'dcba\']', 
// instead got: '[\'abcd\', \'abdc\', \'adbc\', \'bacd\', \'bcad\', \'bcda\', \'cbda\', \'cdab\', \'cdba\', \'dabc\', \'dacb\', \'dcab\']'