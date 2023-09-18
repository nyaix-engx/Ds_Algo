// #Printing subsequences whose sum is K

const sum1=(array)=>{
    let result = array.reduce((a, b) => {
        return a + b;
      }, 0);
    return result;
}

const SumSubsequence=(arr1,arr2,i,target)=>{
  if(i>=arr2.length){
    if(sum1(arr1)===target){
        console.log(arr1);
    }
    return;
  }

  SumSubsequence(arr1.concat(arr2[i]), arr2, i+1, target);
  SumSubsequence(arr1.slice(0,i),arr2,i+1,target);
}

SumSubsequence([],[5,2,6,2,6,1,8,2,3],0,11)


