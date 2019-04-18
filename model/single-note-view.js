(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.returnDiv = function () {
    return '<ul><div><p>' + this.note.text + '</p></div></ul>';
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
