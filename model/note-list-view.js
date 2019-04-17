(function (exports) {
  function NoteListView (noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnHTML = function () {
    var html = "<ul>"

    for (var i = 0; i < this.noteList.list.length; i++) {
      var truncated = this.noteList.list[i].text.substring(0,20)
      html = html.concat('<li><div>' + truncated + '</div></li>');
    };

    html = html.concat('</ul>');
    return html;
  };







  exports.NoteListView = NoteListView;
})(this);
