const backtrack=(index, target, inputArr, arr, prodArr)=>{
    if(index===inputArr.length){
        if(target===0){
            prodArr.push(arr)
        }
        return;
    }

    if(inputArr[index]<=target){
        backtrack(index, target-inputArr[index], inputArr, arr.concat(inputArr[index]), prodArr);
        arr.slice(0,index);
    }
    backtrack(index+1, target, inputArr, arr, prodArr);
}

const combinationSum=(candidates, target)=>{
    const result=[];
    backtrack(0, target, candidates, [], result );
    return result;
}
console.log(combinationSum([2,3,6,7],7))