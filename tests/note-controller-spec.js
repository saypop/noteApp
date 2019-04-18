console.log("TESTING NOTE CONTROLLER");

function canBeInstantiated() {
  var noteController = new NoteController();
  assert.isTrue("can be instantiated", noteController !== undefined);
};

canBeInstantiated();

function takesNoteList() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue("takes a note list as a parameter", noteController.noteList === noteList);
};

takesNoteList();

function addsANote() {
  function NoteListDouble () {
  };
  NoteListDouble.prototype.newNote = function (text) {
    this.text = text
  };
  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);
  noteController.addNote("Text input");
  assert.isTrue(".addNote calls .newNote from noteList", noteController.noteList.text === "Text input");
};

addsANote();

function canRenderFrontPage() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addNote("Favourite food: pesto");
  var elementDouble = {}
  noteController.renderFrontPage(elementDouble);
  assert.isTrue(".setHTML change element innerHTML", elementDouble.innerHTML === '<ul><li><div><a href="#notes/12">Favourite food: pest</a></div></li></ul>');
};

canRenderFrontPage();

function canRenderNotePage() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addNote("Favourite food: pesto");
  function ElementDouble () {
    this.innerHTML = '';
  };
  var elementDouble = new ElementDouble();
  var locationDouble = 'localhost:8080/#notes/13';
  noteController.renderNotePage(elementDouble, locationDouble);
  assert.isTrue("changes content of app to become HTML of note", elementDouble.innerHTML === '<ul><div><p>Favourite food: pesto</p></div></ul>')

};

canRenderNotePage();
