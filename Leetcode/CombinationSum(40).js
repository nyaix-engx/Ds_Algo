// #Using Recursion - way 1

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

const combinationSum=(target, candidates)=>{
    const result=[];
    const map=new Map();
    backtrack(0, target, [], candidates.sort((a,b)=>a-b), result, map);
    return result;
}

// combinationSum([10,1,2,7,6,1,5], 8)


// #using recursion - way 2

const backtrack2=(index, arr, target, candidates, ds)=>{
    if(target===0){
        ds.push([...arr]);
        return;
    }

    for(let i=index;i<candidates.length;i++){
        if(candidates[i]>target) break;
        if(i>index && candidates[i]===candidates[i-1]) continue;
        arr.push(candidates[i]);
        backtrack2(i+1, arr, target-candidates[i], candidates, ds);
        arr.pop();
    }
}


const combinationSum2=(target, candidates)=>{
    const ds=[]
    backtrack2(0, [], target, candidates.sort((a,b)=>a-b), ds);
    return ds;
}


console.log(combinationSum(4, [1,1,2,2,1] ))