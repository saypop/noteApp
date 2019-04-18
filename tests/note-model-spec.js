console.log("TESTING NOTE MODEL")

function canBeInstantiated() {
  var note = new Note();


  assert.isTrue("can be instantiated", note !== undefined);
};

canBeInstantiated();

function isGivenID(){
  var note = new Note();
  assert.isTrue("assigns an id to new notes", note.id === 1);
}

isGivenID()

function takesText() {
  var note = new Note("Text input");
  assert.isTrue("note has a text", note.text == "Text input");
};

takesText();

function returnsText() {
  var note = new Note("Text input");
  assert.isTrue(".returnText returns text", note.returnText() == "Text input");
};

returnsText();
