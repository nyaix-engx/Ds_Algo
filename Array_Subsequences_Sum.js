// #Printing subsequences whose sum is K

const subsequence=(i, arr,target, sum)=>{
    if(i===target.length){
        if(sum===2) console.log(arr);
        return;
    }
    sum+=target[i];
    subsequence(i+1,arr.concat(target[i]),target, sum);
    sum-=target[i];
    subsequence(i+1, arr.slice(0,i),target, sum);
}


// subsequence(0, [],[1,2,1] ,0)


// #Print any one subsequence whose sum is given to you.


const oneSubsequence=(i, arr1, arr2, sum, target)=>{
    if(i===arr2.length){
        if(sum===target){
            console.log(arr1);
            return true;
        } 
        return false;
    }
    sum+=arr2[i];
    if(oneSubsequence(i+1, arr1.concat(arr2[i]),arr2, sum, target)===true) return true;
    sum-=arr2[i];
    if(oneSubsequence(i+1, arr1.slice(0,i),arr2, sum, target)===true) return true;
    return false;
}

// oneSubsequence(0,[],[1,2,1],0,2)


const countSubsequence=(i, arr1, arr2, sum, target, count )=>{
    if(i===arr2.length){
        if(sum===target) {
            return 1
        }
        return 0;
    }
    sum+=arr2[i];
    const l = countSubsequence(i+1, arr1.concat(arr2[i]), arr2, sum, target, count );
    sum-=arr2[i];
    const r = countSubsequence(i+1, arr1.slice(0,i),arr2, sum, target, count);
    return l + r;
}

console.log(countSubsequence(0, [], [1,2,1], 0, 2, 0));