var Grid, Square, example_board, g, util;

util = require('util');

example_board = ['HUAC.TEMPO.RIMS', 'USSR.ONTAP.EROO', 'BEHINDBARS.HORN', '...TOOL...TANGO', 'INSET.ONTHEBEAM', 'NOURI.CURED.DNA', 'RUNINS.MOA.....', 'ENGAGEMENTRINGS', '.....PER.HADDIE', 'AKA.TINAS.HEAVE', 'BANKVAULT.ROKER', 'ARENA...ARAL...', 'CAME.HOBBYHORSE', 'UTIL.ADELA.GELT', 'SECT.HELEN.YOYO'];

Grid = (function() {
  function Grid(n) {
    var i, item, j, len, len1, r, row;
    this.rows = [];
    for (i = 0, len = example_board.length; i < len; i++) {
      r = example_board[i];
      row = [];
      for (j = 0, len1 = r.length; j < len1; j++) {
        item = r[j];
        row.push(new Square(item, 0));
      }
      this.rows.push(row);
    }
  }

  Grid.prototype.isBlack = function(row, col) {
    return this.rows[row][col].black;
  };

  return Grid;

})();

Square = (function() {
  function Square(letter, number) {
    this.black = letter === '.';
    this.correct_letter = letter;
    this.number = 0;
  }

  return Square;

})();

module.exports = {
  Grid: Grid,
  Square: Square
};

/*g = new Grid();*/

//console.log(g.isBlack(0, 0));

//console.log(g.isBlack(0, 4));

// ---
// generated by coffee-script 1.9.2<F37>
