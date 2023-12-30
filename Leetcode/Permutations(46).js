// # Leetcode problem Permutation - 46

var permute = function(nums) {
    const backtrack=(temp,result,map)=>{
        if(temp.length===nums.length){
            result.push([...temp])
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(!map.has(nums[i])){
                map.set(nums[i],nums[i])
                temp.push(nums[i]);
                backtrack(temp, result, map);
                temp.pop();
                map.delete(nums[i]);
            }
        }

    }

    const result=[];
    const map= new Map();

    backtrack([],result,map)
    return result
};

// console.log(permute([1,2,3]))

// Swapping method

var swapPermute=(num)=>{

    const swap=(a,b)=>{
        let flag;
        flag=num[a];
        num[a]=num[b];
        num[b]=flag;
    }

    const backtrack=(index,result)=>{

        if(index>=num.length){
            result.push([...num]);
            return;
        }

        for(let i=index;i<num.length;i++){
            console.log("before",num, [i,index])
            swap(i,index);
            backtrack(index+1, result);
            console.log("after",num, [i,index])
            swap(i,index);
        }

    }

    const result=[];
    backtrack(0, result);
    return result;
}

console.log(swapPermute([1,2,3]))



