


function nextBigger(num){
  const arr = num.toString().split('');
  let result;

  function compare(arr, p = arr.length-1){
    let l = p-1;
    console.log(p);
    if(p === 0) {
      //console.log(-1);
      return result = -1;
    }


    for (let i=l; i>=0; i--){
     
      let tempArr = num.toString().split('');
      let moving = tempArr[p];
      tempArr[p] = tempArr[i];
      tempArr[i] = moving;
      console.log(`tried swapping pointer ${p} with left-bound: ${i}. temp array: ${tempArr}`);
      if (tempArr.join('') > arr.join('')){
        console.log(`found greater number, with p at ${p}.left-bound: ${i} Number: ${tempArr.join('')}`);
        return result = parseInt(tempArr.join(''),10);
      } else if (tempArr.join('') === arr.join('')) {
        console.log('tempArr and original arr are the same, breaking out of loop and moving to next p.');
        break;
      }

    }

    //console.log(`swaps fully tried at p: ${p}. Moving pointer to: ${p-1}`);

    compare(arr, p-1)
    
   

  }


  compare(arr);
  return result;


}

//nextBigger(6633750298); //Expected: 6633750829

nextBigger(626741); // Expected: 627146
//console.log(nextBigger(10));
//nextBigger(350732); //Expected: 352037
//console.log(nextBigger(144)); // should be 414
//console.log(nextBigger(4144)); // should be 4414
//console.log(nextBigger(414)); // should be 441
//console.log(nextBigger(2017));


