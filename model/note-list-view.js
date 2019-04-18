(function (exports) {
  function NoteListView (noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnListHTML = function () {
    var html = "<ul>"

    for (var i = 0; i < this.noteList.list.length; i++) {
      var truncated = this.noteList.list[i].text.substring(0,20)
      html = html.concat('<li><div><a href="#notes/' + this.noteList.list[i].id + '">' + truncated + '</a></div></li>');
    };

    html = html.concat('</ul>');
    return html;
  };

  NoteListView.prototype.returnPageHTML = function (location = window.location.href) {
    noteID = parseInt(location.split('#')[1].split('/')[1], 10);
    var noteSelected = this.noteList.list.filter(note => {
      return note.id === noteID
    })[0]
    html = '<ul><li><div><p>' + noteSelected.text + '</p></div></li></ul>';
    return html
  };

  exports.NoteListView = NoteListView;
})(this);
