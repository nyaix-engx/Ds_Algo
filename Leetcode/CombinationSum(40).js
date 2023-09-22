const backtrack=(index, target, array1, array2, result, map )=>{
    if(index===array2.length){
        if(target===0){
            result.push(array1)
        }
        return;
    }
    if(array2[index]<=target && map.get(array2[index])!==array2[index]){
        backtrack(index+1, target-array2[index], array1.concat(array2[index]), array2, result, new Map());
        array1.slice(0,index);
    }
    map.set(array2[index],array2[index])
    backtrack(index+1, target, array1, array2, result, map);
}

const combinationSum=(candidates, target)=>{
    const result=[];
    const map=new Map();
    backtrack(0, target, [], candidates.sort((a,b)=>a-b), result, map);
    return result;
}

combinationSum([10,1,2,7,6,1,5], 8)