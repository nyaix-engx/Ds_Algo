const mergesort=(arr)=>{

    const merge=(a, low, mid, high)=>{
        let i=low;
        let j=mid+1;
        let temp=[];
        while(i<=mid && j<=high){
            if(a[i]>a[j]){
                temp.push(a[j]);
                j++;
            }else{
                temp.push(a[i]);
                i++;
            }
        }
        while(i<=mid){
            temp.push(a[i]);
            i++;
        }

        while(j<=high){
            temp.push(a[j]);
            j++;
        }

        for(let k=low;k<=high;k++){
            console.log(low)
            a[k]=temp[k-low];
        }
    }

    const recur=(a, low, high)=>{
        if(low>=high) return;
        const mid=Math.floor((low+high)/2);
        recur(a, low, mid);
        recur(a, mid+1, high);
        merge(a, low, mid, high);
    }

    recur(arr,0,arr.length-1)
    return arr;
}


console.log(mergesort([4,8,1,9,2,44,21,67,11,22,6,11,89,54,73]))