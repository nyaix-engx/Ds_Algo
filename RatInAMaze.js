// const ratMaze=(N, arr)=>{

//     const check=(i,j)=>{
//         // For down
//         if(!map.get(`${i+1}${j}`) && i < N-1 && arr[i+1][j]===1) return "D"
//         // For left
//         if(!map.get(`${i}${j-1}`) && j > 0 && arr[i][j-1]===1) return "L"
//         // For right
//         if(!map.get(`${i}${j+1}`) && j < N-1 && arr[i][j+1]===1) return "R"
//         // For up
//         if(!map.get(`${i-1}${j}`) && i > 0 && arr[i-1][j]===1) return "U"

//     }

//     const recur=(i,j,string, res,map)=>{
//         if(i===N-1 && j===N-1){
//             res.push([...string.join("")]);
//             return;
//         }

//         if(!map.get(`${i}${j}`)){
//             switch(check(i,j, map)){
//                 case "D":
//                     map.set(`${i}${j}`,true);
//                     string.push("D");
//                     recur(i+1,j,string,res, map)
//                     map.set(`${i}${j}`,false);
//                     string.pop();
//                     return;

//                 case "L":
//                     map.set(`${i}${j}`,true);
//                     string.push("L");
//                     recur(i,j-1,string,res, map)
//                     map.set(`${i}${j}`,false);
//                     string.pop();
//                     return;

//                 case "R":
//                     map.set(`${i}${j}`,true);
//                     string.push("R");
//                     recur(i,j+1,string,res, map);
//                     map.set(`${i}${j}`,false);
//                     string.pop();
//                     return;

//                 case "U":
//                     map.set(`${i}${j}`,true);
//                     string.push("U");
//                     recur(i-1,j,string,res, map);
//                     map.set(`${i}${j}`,true);
//                     string.pop();
//                     return;
//             }
//         }

//     }
//     const res=[]
//     const map=new Map();
//     recur(0,0,[],res,map);
//     return res
// }




const ratInMaze=(N, arr)=>{

    const check=(i,j,value)=>{

        switch(value){

            case "D":
                if(!map.get(`${i+1}${j}`) && i < N-1 && arr[i+1][j]===1){
                    return true;
                } 
                return false;
            
            case "L":
                if(!map.get(`${i}${j-1}`) && j > 0 && arr[i][j-1]===1) {
                    return true
                }
                return false;
            
            case "R":
                if(!map.get(`${i}${j+1}`) && j < N-1 && arr[i][j+1]===1){
                    return true;
                } 
                return false;

            case "U":
                if(!map.get(`${i-1}${j}`) && i > 0 && arr[i-1][j]===1){
                    return true;
                } 
                return false;

        }

    }

    const recur=(i,j,string, res,map)=>{
        if(i===N-1 && j===N-1){
            res.push([...string.join("")]);
            return;
        }

        let set=["D","L","R","U"]

        for(let k=0;k<set.length;k++){  
            if(check(i,j,set[k])){
                map.set(`${i}${j}`,true);
                string.push(set[k]);   
                if(set[k]==="D") recur(i+1,j,string,res, map); 
                if(set[k]==="L") recur(i,j-1,string,res, map); 
                if(set[k]==="R") recur(i,j+1,string,res, map); 
                if(set[k]==="U") recur(i-1,j,string,res, map); 
                map.set(`${i}${j}`,false);
                string.pop();
            }
        }
    }
    const res=[]
    const map=new Map();
    recur(0,0,[],res,map);
    return res
}

console.log(ratInMaze(4,[[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]))
