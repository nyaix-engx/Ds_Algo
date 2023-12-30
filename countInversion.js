const countInversion=(arr)=>{

    const merge=( low, mid, high, array)=>{
        let i=low;
        let j=mid+1;
        let temp=[]
        let count=0
        while(i<=mid && j<=high){
            if(array[i]>array[j]){
                temp.push(array[j]);
                count+=mid-i+1;
                j++;
            }else{
                temp.push(array[i]);
                i++;
            }
        }
        while(i<=mid){
            temp.push(array[i]);
            i++;
        }

        while(j<=high){
            temp.push(array[j]);
            j++;
        }

        for(let i=low;i<=high;i++){
            array[i]=temp[i-low]
        }
        return count
    }

    const recur=( low, high,array)=>{
        let count=0;
        if(low>=high) return count;
        const mid=Math.floor((low+high)/2)
        count+=recur( low, mid, array);
        count+=recur( mid+1, high, array);
        count+=merge( low, mid, high, array);
        return count;
    }

    return recur(0,arr.length-1,arr)
}


console.log(countInversion([2, 4, 1, 3, 5]))