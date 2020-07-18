


function nextBigger(num){
  const arrayOriginal = num.toString().split('');
  let result;

// function to find a bigger number

    function compare(arr, p = arr.length-1){
      let l = p-1;
      if(p === 0) {
        return result = -1;
      }


      for (let i=l; i>=0; i--){
      
        let tempArr = num.toString().split('');
        let moving = tempArr[p];
        tempArr[p] = tempArr[i];
        tempArr[i] = moving;
        //console.log(`tried swapping pointer ${p} with left-bound: ${i}. temp array: ${tempArr}`);
        if (tempArr.join('') > arr.join('')){
          //console.log(`found greater number, with p at ${p}.left-bound: ${i} Number: ${tempArr.join('')}`);
          return result = parseInt(tempArr.join(''), 10);
        
        } else if (tempArr.join('') === arr.join('')) {
          //console.log('tempArr and original arr are the same, breaking out of loop and moving to next p.');
          break;
        }

      
      }

      compare(arr, p-1)
      
    }

   
//function to take first bigger number found, and find smaller permutations within the range of original num(arr) and first bigger

          function compareSmaller(firstBiggestNum, arr, p = arr.length-1){
            //arr = firstBiggestNum.toString().split('');
                        
            if (p === arr.length-1){
            //console.log(`Next biggest found: ${firstBiggestNum}.`);
            }
            let l = p-1;
            if(p === 0) {
              return firstBiggestNum; // return the first bigger if no more nums in range are found;
            }

            

            for (let i=l; i>=0; i--){
              let tempArr2 = firstBiggestNum.toString().split('');
             // console.log(tempArr2);
              let moving2 = tempArr2[p];
              tempArr2[p] = tempArr2[i];
              tempArr2[i] = moving2;
              //console.log(`tried swapping pointer ${p} with left-bound: ${i}. temp array: ${tempArr2}`);
                //console.log(`now check. Is newly swapped ${tempArr2.join('')} GREATER than original array ${arrayOriginal.join('')}? Answer: ${tempArr2.join('') > arrayOriginal.join('')}`);
                //console.log(`also check. Is newly swapped ${tempArr2.join('')} LESS than first bigger found? ${firstBiggestNum}? Answer: ${tempArr2.join('') < firstBiggestNum}`);
                if (tempArr2.join('') > arrayOriginal.join('') && tempArr2.join('') < firstBiggestNum){
                  //console.log(`found number, in range between original array and first bigger num ${firstBiggestNum}, with p at ${p}.left-bound: ${i} Number: ${tempArr2.join('')}`);
                  firstBiggestNum = parseInt(tempArr2.join(''),10);
                  //console.log(`nextBiggest number found: ${firstBiggestNum}`);
                  result = firstBiggestNum;
                  //compareSmaller(result, result.toString().split(''));
                } else {
                  //console.log('nothing found.'); // with pointer at ${p} and leftbound at ${i}. Result: ${result = firstBiggestNum.toString().split('')}`); 
                  //return result = firstBiggestNum.toString().split('');

                }

            }

            compareSmaller(firstBiggestNum, firstBiggestNum.toString().split(''), p-1);


          }



  compare(arrayOriginal);
  
  if (result){
      compareSmaller(result, result.toString().split(''));
    }
  
  //console.log(result);
    return result;


}


//passes 139 of 150 tests. Currently not working for (examples):
nextBigger(40783) // Expected: 40837, instead got: 43078
nextBigger(4206096767844) // Expected: 4206096768447, instead got: 4206404667789
nextBigger(2786706993) //Expected: 2786709369, instead got: 2786730699
nextBigger(898220105637321) // Expected: 898220105671233, instead got: 898220110233567

//nextBigger(6633750298); //Expected: 6633750829

//nextBigger(626741); // Expected: 627146
//console.log(nextBigger(10));
//nextBigger(350732); //Expected: 352037
//console.log(nextBigger(144)); // should be 414
//console.log(nextBigger(4144)); // should be 4414
//console.log(nextBigger(414)); // should be 441
//console.log(nextBigger(2017));


