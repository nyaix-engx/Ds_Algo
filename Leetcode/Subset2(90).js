// # All subsets of an array without the duplicates

var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b);

    const backtrack=(index, temp, result)=>{
        result.push([...temp]);
        for(let i=index;i<nums.length;i++){
            if(i!=index && nums[i-1]===nums[i]) continue;
            temp.push(nums[i]);
            backtrack(i+1, temp, result);
            temp.pop();
        }
    }

    const result=[];
    backtrack(0, [], result);
    return result;
};

console.log(subsetsWithDup([1,2,2]))