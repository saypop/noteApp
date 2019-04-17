console.log("TESTING NOTE LIST VIEW")
var note = new Note("Food");
var noteList = new NoteList();
noteList.addNote(note);
var noteListView = new NoteListView(noteList);
var loremIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
var loremIpsumTrunc = loremIpsum.substring(0,20);

function canBeInstantiated() {
  assert.isTrue("can be instantiated", noteListView !== undefined);
};

canBeInstantiated();

function isInstantiatedWithNoteList() {
  assert.isTrue("is instantiated with a note list model", isEqual(noteListView.noteList, noteList));
};

isInstantiatedWithNoteList();

function canReturnHTML() {
  noteList.newNote(loremIpsum);
  
  assert.isTrue("returns HTML string truncated to 20 chars", noteListView.returnHTML() === '<ul><li><div>Food</div></li><li><div>' + loremIpsumTrunc + '</div></li></ul>');
};

canReturnHTML();
