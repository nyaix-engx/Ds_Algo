const SolveNQueens=(n)=>{

    const recur=(mat,col,result,h1,d1,d2)=>{
        if(col===n){
            result.push([...mat].map((ele)=>ele.join("")));
            return;
        }

        for(let row=0;row<n;row++){
                if(!h1.has(row) && !d1.has(row+col) && !d2.has(n-1+col-row)){
                    mat[row][col]="Q";
                    h1.set(row,true);
                    d1.set(row+col, true);
                    d2.set(n-1+col-row, true);
                    recur(mat, col+1, result,h1,d1,d2);
                    mat[row][col]=".";
                    h1.delete(row);
                    d1.delete(row+col);
                    d2.delete(n-1+col-row);
                }
            }
        }
        const mat=[...new Array(n)].map((ele)=> new Array(n).fill("."));
        const result=[];
        const h1 = new Map();
        const d1 = new Map();
        const d2 = new Map();
        recur(mat,0,result,h1,d1,d2);
        return result;
    
    }

console.log(SolveNQueens(4));