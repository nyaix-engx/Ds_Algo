const getPermutation = (n, k)=> {
    let set= new Array(n);
    for(let i=0;i<set.length;i++){
        set[i]=i+1
    }

    const recur=(res, temp, set)=>{

        if(set.length===0){
            res.push([...temp]);
            return;
        }

        if(res.length===k) return true

        for(let i=0;i<set.length;i++){
            temp.push(set[i]);
            let x = set.slice(0, i).concat(set.slice(i + 1));
            if(recur(res,temp,x)===true) return true
            temp.pop();
        }

    }
    const res=[]
    if(recur(res,[], set)=== true || res.length===k) return res[k-1].join("")
};


console.log(getPermutation(1,1));

