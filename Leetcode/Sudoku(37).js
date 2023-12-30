const solveSudoku=(board)=>{

    const isCheck=(i,j,k,board)=>{
        for(let x=0;x<9;x++){
            if(board[i][x]===k || board[x][j]===k) return false;
            if(board[3*Math.floor(i/3)+Math.floor(x/3)][3*Math.floor(j/3)+Math.floor(x%3)]===k) return false;
        }
        return true;
    }

    const recur=(board)=>{
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[i].length;j++){
                if(board[i][j]==="."){
                    for(let k=1;k<=9;k++){
                        const sK=k.toString()
                        if(isCheck(i,j,sK,board)){
                            board[i][j]=sK

                            if(recur(board)===true){
                                return true;
                            }else{
                                board[i][j]="."
                            }
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
    recur(board);
    return board
}


console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))