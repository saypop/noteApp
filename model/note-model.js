(function (exports) {
  var nextID = 0

  function Note (text) {
    this.text = text;
    this.id = nextID++;
  };

  Note.prototype.returnText = function () {
    return this.text;
  }

  exports.Note = Note;

})(this)
