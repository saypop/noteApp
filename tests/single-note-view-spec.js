console.log("TESTING SINGLE NOTE VIEW");

function canBeInstantiated() {
  var singleNoteView  = new SingleNoteView();
  assert.isTrue("can be instantiated", singleNoteView !== undefined);
};

canBeInstantiated();

function takesNote() {
  var note = new Note();
  var singleNoteView  = new SingleNoteView(note);
  assert.isTrue("takes a note as a parameter", singleNoteView.note === note);
};

takesNote();

function canReturnDiv() {
  var chocolate = new Note("chocolate");
  var singleNoteView  = new SingleNoteView(chocolate);
  assert.isTrue("returns HTML string", singleNoteView.returnDiv() === '<ul><li><div><p>chocolate</p></div></li></ul>');
};

canReturnDiv();

// function addsANote() {
//   function NoteListDouble () {
//   };
//   NoteListDouble.prototype.newNote = function (text) {
//     this.text = text
//   };
//   var noteListDouble = new NoteListDouble();
//   var noteController = new NoteController(noteListDouble);
//   noteController.addNote("Text input");
//   assert.isTrue(".addNote calls .newNote from noteList", noteController.noteList.text === "Text input");
// };
//
// addsANote();
//
// function setsAnHTML() {
//   var noteList = new NoteList();
//   var noteController = new NoteController(noteList);
//   noteController.addNote("Favourite food: pesto");
//   function ElementDouble () {
//     this.innerHTML = '';
//   };
//   var elementDouble = new ElementDouble();
//   noteController.setHTMLOfApp(elementDouble);
//   assert.isTrue(".setHTML change element innerHTML", elementDouble.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>");
// };
//
// setsAnHTML();
