(function (exports) {


  function NoteController (noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.addNote = function (text) {
    this.noteList.newNote(text);
  };

  NoteController.prototype.setHTMLOfApp = function (element = document.getElementById('app')) {
    element.innerHTML = this.noteListView.returnHTML();
  }

  exports.NoteController = NoteController;

})(this)
