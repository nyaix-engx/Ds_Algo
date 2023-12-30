const solveNQueens=()=>{

    const check=(col, row, arr)=>{
        let tempR=row;
        let tempC=col;

        while(row>=0 && col>=0){
            if(arr[row][col]==='Q') return false;
            row--;
            col--;
        }
        row=tempR;
        col=tempC;
        while(col>=0){
            if(arr[row][col]==='Q') return false;
            col--;
        }
        row=tempR;
        col=tempC;
        while(row<arr.length && col>=0){
            if(arr[row][col]==='Q') return false;
            col--;
            row++;
        }

        return true;
    }
    
    const recur=(arr,col, result)=>{
        if(col===arr.length){
            result.push([...arr].map(ele=>ele.join("")))
            return;
        }

        for(let row=0;row<arr.length;row++){
            if(check(col,row,arr)){
                arr[row][col]="Q";
                recur(arr,col+1, result);
                arr[row][col]=".";
            }
        }
    }

    var mat = [...new Array(4)].map( ele => new Array(4).fill(".") );
    var result = [];
    recur(mat,0, result);
    console.log("Res",result)
    return mat;
}


solveNQueens(4,0)