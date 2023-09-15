// # Check whether a string is palindrome using 2 pointers.

const Palindrome=(arr, i, j)=>{
    if(i>=j) return "The string is a palindrome";

    if(arr[i]===arr[j]) {
        return Palindrome(arr,i+1,j-1)
    } else {
        return "The string is not a palindrome"
    }
}

// console.log(Palindrome("MADDAM",0,5));

// # Check whether a string is palindrome using 1 pointers.

const Palindrome_2=(arr, i)=>{
    let n=arr.length-1
    if(i>=n/2) return "The string is a palindrome";

    if(arr[i]===arr[n-i]) {
        return Palindrome_2(arr,i+1)
    } else {
        return "The string is not a palindrome"
    }
}

console.log(Palindrome_2("MADFAM",0));