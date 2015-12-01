var SongView = function(song){
  this.song = song;
  this.$el = $("<div class='song'></div>");
};

SongView.prototype ={
  render: function(){
    var $el = $("<p>"+this.song.title+"</p>")
    return $el
  }
}
