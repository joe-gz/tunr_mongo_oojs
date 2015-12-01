var ArtistView = function(artist){
  this.artist = artist;
  this.$el = $("<div class='artist'></div>");
};

ArtistView.prototype ={
  render: function(){
    var self = this;
    self.$el.html(self.artistTemplate(self.artist));
    $(".artists").append(self.$el);

    // create show songs button listener
    var showButton = self.$el.find(".showSongs");
    var songsDiv = self.$el.find("div.songs");
    songsDiv.hide();
    showButton.on("click", function(){
      // fetch songs
      if (songsDiv.children().length === 0) {
        self.artist.fetchSongs().then(function(songs){
          songs.forEach(function(song){
            var songView = new SongView(song);
            songsDiv.append(songView.render());
            songsDiv.show();
          })
        })
      }
      songsDiv.toggle();
    })
  },
  artistTemplate: function(artist){
    var html = $("<div>");
    html.append("<h3>" + this.artist.name + "</h3>");
    html.append("<img class='artist-photo' src='" + this.artist.photoUrl + "'>");
    html.append("<button class='showSongs'>Show Songs</button>");
    html.append("<div class='songs'></div>");
    return(html);
  }
}
