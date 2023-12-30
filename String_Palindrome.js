

const partition = (s)=> {

    const checkPalindrome=(value)=>{
        let i=0;
        let j=value.length-1
        while(i<j){
            if(value[i]!==value[j]){
                return false
            }
            i++;
            j--;
        }
        return true;
    }

    const backtrack=(res,temp,index)=>{
        if(index===s.length){
            res.push([...temp])
            return;
        }

        for(let i=index;i<s.length;i++){
            const item=s.slice(index,i+1);
             if(checkPalindrome(item)){
                temp.push(s.slice(index,i+1))
                backtrack(res,temp,i+1)
                temp.pop();
            }
        }
    }

    
    let result=[]
    backtrack(result,[],0);
    return result

};


console.log(partition('ATTA'))

