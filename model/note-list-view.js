(function (exports) {
  function NoteListView (noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnHTML = function () {
    var html = "<ul>"
    for (var i = 0; i < this.noteList.list.length; i++) {
      html = html.concat('<li><div>' + this.noteList.list[i].text + '</div></li>');
    };
    html = html.concat('</ul>');
    return html;
  };

  exports.NoteListView = NoteListView;
})(this);
