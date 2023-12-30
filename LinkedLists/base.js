class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

const a= new Node(2)
const b= new Node(8)
const c= new Node(3)
const d= new Node(7)
 
a.next=b
b.next=c
c.next=d

// A -> B ->C -> D ->NULL

// TRAVERSE ALGO

const printLinkedList=(head)=>{
    let current=head;
    while(current!=null){
        console.log("Value",current.val);
        current=current.next;
    }
}

const recur=(current)=>{
    if(current===null) return;
    console.log("Value",current.val);
    recur(current.next);
}

// recur(a)

// printLinkedList(a)


//Q1 Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

const problem1=(current)=>{
    const arr=[]
    while(current!=null){
        arr.push(current.val);
        current=current.next;
    }
    return arr;
}

// console.log(problem1(a))

const recurProblem1=(current,arr)=>{
    if(current===null) return;
    arr.push(current.val);
    recurProblem1(current.next,arr)
    return arr;
}
// console.log(recurProblem1(a,[]));

//Q2 Return the sum of the linked list

const sum=(head)=>{
    let sum=0;
    let current=head;
    while(current!=null){
        sum+=current.val;
        current=current.next;
    }
    return sum;
}

const recurSum=(current)=>{
    if(current===null) return 0;
    return current.val+recurSum(current.next);
}

// console.log(recurSum(a));

//Q3 Return true or false whether the target value is contained in the linked list

const target=(current, value)=>{
    while(current!=null){
        if(current.val===value) return true;
        current=current.next;
    }
    return false;
}

const recurTarget=(current, value)=>{
    if(current===null) return false;
    if(current.val===value) return true;
    return recurTarget(current.next,value)===true

}

// console.log(recurTarget(a,80));

//Q4 Return the value at the specified position

const getValue=(current, index)=>{
    let i=0;
    while(current!=null){
        if(i===index) return current.val;
        current=current.next;
        i++;
    }
    return "Not Found"
}

const recurGetValue=(current,index, pointer)=>{
    if(current===null) return null;
    if(pointer===index) return current.val;
    return recurGetValue(current.next, index, pointer+1);
}

// console.log(recurGetValue(a,6,0))

//Q5 Reverse the linked list

const reverseLinkedList=(current,second)=>{
    let prev=null;
    while(current!=null){
        const next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    return prev
}


// console.log(reverseLinkedList(a))

const recurReverseLinkedList=(current,prev,next)=>{
    if(current===null) return prev;
    next=current.next;
    current.next=prev;
    prev=current;
    current=next;
    return recurReverseLinkedList(current, prev, next)
}

console.log(recurReverseLinkedList(a,null,b))