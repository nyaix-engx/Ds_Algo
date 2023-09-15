const subsequence=(arr1, arr2, i)=>{
    if(i>=arr1.length)
    {
        console.log(arr2);
        return;
    }
    subsequence(arr1, arr2.slice(0,i), i+1);
    subsequence(arr1, arr2.concat(arr1[i]),i+1);
}


subsequence([3,1,2],[], 0)