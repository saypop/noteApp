(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.returnDiv = function () {
    return '<ul><li><div><p>' + this.note.text + '</p></div></li></ul>';
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
