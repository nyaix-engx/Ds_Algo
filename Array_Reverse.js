// #Normal Method

const Normal_Reverse=(arr)=>{
    let i=0, j=arr.length-1;
    while(i<j){
        let swap;
        swap=arr[i];
        arr[i]=arr[j];
        arr[j]=swap;
        i++;
        j--;
    }
    return arr;
}

// console.log(Normal_Reverse([2,5,1,8,9,4]));

// #Recursive Method using 2 pointers

const Recursive_Reverse=(arr,i,j)=>{
    if(i>=j) return arr;
    let swap=arr[i];
    arr[i]=arr[j];
    arr[j]=swap;
    return Recursive_Reverse(arr,i+1,j-1);
}

// console.log(Recursive_Reverse([2,5,1,8,9,4],0,5));


// #Recursive Method using 1 pointer ?

// const Recursive_Reverse_2=(arr,i)=>{
//     if(i==arr.length-1) return [].push(arr[i]);

//     return Recursive_Reverse_2(arr,i+1).concat(arr[i])
// }

// console.log(Recursive_Reverse_2([2,9,1,7,5],0))

// #Recursive Method using 1 pointer

const Recursive_Reverse_2=(arr,i)=>{
    let n=arr.length-1;
    if(i>=n/2) return arr;
    
    let swap;
    swap=arr[i];
    arr[i]=arr[n-i];
    arr[n-i]=swap;

    return Recursive_Reverse_2(arr,i+1);
}

console.log(Recursive_Reverse_2([2,9,1,7,5],0))
