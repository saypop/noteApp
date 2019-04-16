console.log("TESTING NOTE LIST MODEL")
var noteList = new NoteList();
var note = new Note();
noteList.addNote(note);

function canBeInstantiated() {
  assert.isTrue("can be instantiated", noteList !== undefined);
};

canBeInstantiated();

function storesArray() {
  assert.isTrue("stores an array", isEqual(noteList.list, []));
};

storesArray();

function addNote() {
  assert.isTrue("adds a note to list", isEqual(noteList.list, [note]));
};

addNote();

function returnNotes() {
  assert.isTrue("returns notes in list", isEqual(noteList.returnNotes(), [note]));
};

returnNotes();

function newNote() {
  var newNote = new Note("This is a new note");
  noteList.newNote("This is a new note");
  assert.isTrue("it adds a new note into the list", isEqual(noteList.list[1], newNote));
};

newNote();
