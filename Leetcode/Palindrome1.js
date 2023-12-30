const Palindrome=(string,arr,temp, index)=>{
    if(index===string.length-1){
        arr.push([...temp]);
        return;
    } 
    
    const isPalindrome=(chunk)=>{
        let i=0
        let j=chunk.length-1;
        while(i<j){
            if(chunk[i]!==chunk[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    for(let i=index;i<string.length;i++){
        let item=string.slice(index,i+1)
        if(isPalindrome(item)){
            temp.push(item)
            Palindrome(string,arr,temp, i+1)
            temp.pop();
        }
    }

}

const part=(s)=>{
    const result=[];
    Palindrome(s, result,[], 0);
    return result;
}


function isPalindrome(s) {
    let i = 0, j = s.length - 1;
    while(i < j) {
        if(s[i] != s[j]) {
            // console.log("s = ", s, ", false");
            return false;
        }
        i++;
        j--;
    }
    // console.log("s = ", s, ", true");
    return true;
}

let result = [];
function solve(s, partitionIndex, ansArray) {
    if(partitionIndex >= s.length - 1) {
        // console.log("i = ", partitionIndex, ", ", ansArray);
        result.push([...ansArray]);
        return;
    }

    for(let i = partitionIndex + 1 ; i < s.length ; i++) {
        let temp = s.slice(partitionIndex + 1, i + 1);
        if(isPalindrome(temp)) {
            ansArray.push(temp)
            solve(s, i, ansArray);
            ansArray.pop();
        }
    }
}

var partition = function(s) {
    result = [];
    solve(s, -1, []);
    return result;
};


console.log(part("aab"))

// console.log(partition("aab"))