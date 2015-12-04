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


window.findNRooksSolution = function (size) {
  var solution = undefined;
  var newBoard = new Board({n: size});

  var recurse = function (board, queenCount) {
    if (queenCount === size) return board.rows();
    var rows = board.rows();
    for (var row = 0; row < rows.length; row++) {
      for (var col = 0; col < rows.length; col++) {
        if (rows[row][col] === 0) {
          board.togglePiece(row, col);
          if (!board.hasAnyRooksConflicts()) {
            queenCount++;
            return recurse(board, queenCount);
          } else {
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

window.countNRooksSolutions = function (size) {
  var solution = 0;
  var newBoard = new Board({n: size});

  var recurse = function (board, queenCount) {
    if (queenCount === size) {
      solution++;
      return;
    }
    var rows = board.rows();
    for (var row = 0; row < rows.length; row++) {
      if (rows[queenCount][row] === 0) {
        board.togglePiece(queenCount, row);
        if (!board.hasAnyRooksConflicts()) {
          recurse(board, queenCount + 1);
        }
        board.togglePiece(queenCount, row);
      }
    }
  };

  //["rock","paper",""]
  //[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
  //calcuates posible solutions [[[0,0,0,1],[],[],[]],[],[],[]]
  //iterate solutions hasAnyRooksConflicts ++

  recurse(newBoard, 0);
  console.log(solution);
  console.log('Single solution for ' + size + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (size) {
  var newBoard = new Board({n: size});
  var rows = newBoard.rows();

  var recursive = function (board, queenCount) {
    if (queenCount === size) {
      return rows;
    }
    for (var col = 0; col < rows.length; col++) {
      if (rows[queenCount][col] === 0) {
        board.togglePiece(queenCount, col);
        if (!board.hasAnyQueensConflicts()) {
          return recursive(board, queenCount + 1);
        }
        board.togglePiece(queenCount, col);
      }
    }
  }

  return recursive(newBoard, 0);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
/**
 * Created by student on 12/3/15.
 */
