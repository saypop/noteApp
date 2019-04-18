(function (exports) {


  function NoteController (noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this._hashChange();
  }


  NoteController.prototype.addNote = function (text) {
    this.noteList.newNote(text);
  };

  NoteController.prototype.renderFrontPage = function (element = document.getElementById('app')) {
    element.innerHTML = this.noteListView.returnListHTML();
  };

  NoteController.prototype.renderNotePage = function (element = document.getElementById('app'), location = window.location.href ) {
    noteID = parseInt(location.split('#')[1].split('/')[1], 10);
    var noteSelected = this.noteList.list.filter(note => {
      return note.id === noteID
    })[0];
    var singleNoteView = new SingleNoteView(noteSelected);
    element.innerHTML = singleNoteView.returnDiv();
  };

  NoteController.prototype._hashChange = function (location = window.location.href) {
    elementToUpdate = document.getElementById('app');
    self = this;
    window.addEventListener('hashchange', function() {
      self.renderNotePage(elementToUpdate)
    }, false);
  };

  exports.NoteController = NoteController;

})(this)


var noteList = new NoteList();

var noteController= new NoteController(noteList);
noteController.addNote("Favourite drink: seltzer");
noteController.renderFrontPage();
