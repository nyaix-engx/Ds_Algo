const backtrack=(index, arr, temp ,ds)=>{
    if(index===arr.length){
        ds.push(temp.reduce((a,b)=>a+b,0))
        return;
    }
    temp.push(arr[index])
    backtrack(index+1,arr, temp, ds );
    temp.pop();
    backtrack(index+1,arr, temp, ds);

}

const subsetSum=(arr)=>{
    const ds=[]
    backtrack(0, arr,[], ds);
    return ds
}

console.log(subsetSum([3,1,2]));


