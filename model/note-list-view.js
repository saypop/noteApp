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


  exports.NoteListView = NoteListView;
})(this);
