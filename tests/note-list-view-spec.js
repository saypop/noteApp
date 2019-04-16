console.log("TESTING NOTE LIST VIEW")
var note = new Note("Food");
var noteList = new NoteList();
noteList.addNote(note);
var noteListView = new NoteListView(noteList);

function canBeInstantiated() {
  assert.isTrue("can be instantiated", noteListView !== undefined);
};

canBeInstantiated();

function isInstantiatedWithNoteList() {
  assert.isTrue("is instantiated with a note list model", isEqual(noteListView.noteList, noteList));
};

isInstantiatedWithNoteList();

function canReturnHTML() {
  var chocolate = new Note("chocolate");
  noteList.addNote(chocolate);
  assert.isTrue("returns HTML string", noteListView.returnHTML() === '<ul><li><div>Food</div></li><li><div>chocolate</div></li></ul>');
};

canReturnHTML();
