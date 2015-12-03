/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(size) {
  var solution = undefined;
  var newBoard = new Board({n:size});

  var recurse = function(board, queenCount){
    if(queenCount === size) return board.rows();
    var rows = board.rows();
    for(var row = 0; row < rows.length; row++){
      for(var col = 0; col < rows.length; col++){
        if(rows[row][col] === 0 ) {
          board.togglePiece(row, col);
          if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)) {
            queenCount++;
            return recurse(board, queenCount);
          }else{
            board.togglePiece(row, col);
          }
        }
      }
    }
  };

  solution = recurse(newBoard, 0);
  console.log('Single solution for ' + size + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(size) {
  var solution = [];
  var newBoard = new Board({n:size});

  var recurse = function(board, queenCount){
    var rows = board.rows();
    for(var row = 0; row < rows.length; row++){
      for(var col = 0; col < rows.length; col++){
        if(rows[row][col] === 0 ) {
          board.togglePiece(row, col);
          if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)) {
            queenCount++;
            if(queenCount === size) {solution.push(board.rows()); return;}
            // Might wana copy board and send the copy to recurse
            recurse(board, queenCount);
            queenCount--;
            board.togglePiece(row, col);
          }else{
            board.togglePiece(row, col);
          }
        }
      }
    }
  };

  recurse(newBoard, 0);
  console.log(solution);
  console.log('Single solution for ' + size + ' rooks:', JSON.stringify(solution));
  return solution.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
