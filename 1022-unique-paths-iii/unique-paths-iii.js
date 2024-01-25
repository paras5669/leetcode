/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let emptyCells =0;
    let startCol = 0;
    let startRow = 0;

    for(let i = 0 ; i < rows ; i++){
        for(let j=0;j< cols ; j++){
            if(grid[i][j]===0){
                emptyCells ++;
            }else if(grid[i][j]===1){
                startRow = i;
                startCol = j;
            }
        }
    }

    let visited = Array.from({length:rows},()=> Array(cols).fill(false));

    visited[startRow][startCol] = true;

    let directions =  [-1,0,1,0,-1]

    function rucc( row, col , step ){

            if(grid[row][col]===2){
                return step === emptyCells+1 ? 1: 0 ;
            }

            let path = 0;

            for(let d = 0 ;  d < 4 ; d++){

                const nextRow =  row + directions[d];
                const nextCol = col + directions[d+1];

                if(
                    nextRow >= 0 &&
                    nextRow < rows &&
                    nextCol >= 0 &&
                    nextCol < cols &&
                    !visited[nextRow][nextCol] &&
                    grid[nextRow][nextCol] !== -1
                ){
                    
                        visited[nextRow][nextCol] = true;
                        path += rucc(nextRow,nextCol,step+1);
                        visited[nextRow][nextCol] = false;

                }

            }

        return path;

    }
 
   return rucc(startRow,startCol,0)
 
};