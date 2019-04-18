(function (exports) {


  function NoteController (noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    // this.button.addEventListener('click', function(e) {this.bar();}, false);
  }

  NoteController.prototype.addNote = function (text) {
    this.noteList.newNote(text);
  };

  NoteController.prototype.renderFrontPage = function (element = document.getElementById('app')) {
    element.innerHTML = this.noteListView.returnListHTML();
  };

  NoteController.prototype.renderNotePage = function (element = document.getElementById('app'), location = window.location.href ) {
    element.innerHTML = this.noteListView.returnPageHTML(location);
  };

  exports.NoteController = NoteController;

})(this)


// var noteList = new NoteList();
//
// var noteController= new NoteController(noteList);
// noteController.addNote("Favourite drink: seltzer");
// noteController.setHTMLOfApp();
