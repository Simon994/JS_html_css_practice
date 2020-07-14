

function permutations(str) {

  const arr = str.split('');
  let permutedArr = [];
  function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
  }

  function heapPermutations(arr, n = arr.length){
    if (n===1){
      permutedArr.push(arr.join(''));;
    } else {
      for (let i=1; i<=n; i++){
        
        heapPermutations(arr, n-1);
        if(n%2){
          swap(arr, 0, n-1);
        } else {
          swap(arr, i-1, n-1);
        }
      }
    }

  }

  heapPermutations(arr);
  permutedArr = [...new Set(permutedArr)];
  return permutedArr;

}


permutations('aac');




