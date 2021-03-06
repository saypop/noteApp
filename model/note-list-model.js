(function (exports) {
  function NoteList () {
    this.list = [];
  };

  NoteList.prototype.addNote = function (note) {
    this.list.push(note);
  };

  NoteList.prototype.returnNotes = function () {
    return this.list;
  };

  NoteList.prototype.newNote = function (text) {
    this.list.push(new Note(text));
  };

  exports.NoteList = NoteList;
})(this);
