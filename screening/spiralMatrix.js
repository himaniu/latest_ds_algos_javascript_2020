function spiralMatrix(matrix) {
  
  if(matrix.length === 0) {
    console.log('You have provided an empty matrix.');
    return;
  }
  
  var no_rows = matrix.length;
  var no_cols = matrix[0].length;
  
  var currentIndex_row = 0;
  var currentIndex_col = 0;
  
  while(currentIndex_row < no_rows && currentIndex_col < no_cols) {
    
    // Print the first row
    for(let i=currentIndex_col; i<no_cols; i++) {
      console.log(matrix[currentIndex_row][i]);
    }
    currentIndex_row++;
  
    // Print the last column 
    for(let i=currentIndex_row; i<no_rows; i++) {
      console.log(matrix[i][no_cols-1]);
    }
    no_cols--;
  
    // Keep print the last row from the remaining rows
    if(currentIndex_row < no_rows) {
      for(let i=no_cols-1; i>=currentIndex_col; i--) {
        console.log(matrix[no_rows-1][i]);
      }
      no_rows--;
    }
  
    // Keep printing the first column from the remaining columns
    if(currentIndex_col < no_cols) {
      for(let i=no_rows-1; i>=currentIndex_row; i--) {
        console.log(matrix[i][currentIndex_col]);
      }
      currentIndex_col++;    
    }        
  }
}

var items = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
  [13, 14, 15]
];

spiralMatrix(items);

for(let i=currentCol; i<colLength; i++) {
      console.log(matrix[currentRow][i]);
    }
    
    currentRow++;
    
    for(let i=currentRow; i<rowLength; i++) {
      console.log(matrix[i][colLength-1]);
    }
    
    colLength--;
    
    if (currentRow < rowLength) {
      for(let i=colLength-1; i>=currentCol; i--) {
        console.log(matrix[rowLength-1][i]);
      }
      rowLength--;
    }
  
    if (currentCol < colLength) {
      for(let i=rowLength-1; i>=currentRow; i--) {
        console.log(matrix[i][currentCol]);
      }
      currentCol++;
    }