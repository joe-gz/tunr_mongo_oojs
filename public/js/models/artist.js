var Artist = function (info) {
  this.name = info.name
  this.photoUrl = info.photoUrl;
  this.nationality = info.nationality;
  this.id = info._id
}

Artist.prototype.fetchSongs = function(){
  var url = "http://localhost:3000/artists/" + this.id + "/songs";
  var request = $.getJSON(url)
  .then(function(response){
    var songs = [];
    for(var i = 0; i < response.length; i++){
      songs.push(new Song(response[i]));
    }
    return songs;
  })
  .fail(function(repsonse){
    console.log("js failed to load");
  })
  return request;
}

Artist.fetch = function() {
  var request = $.getJSON('/artists')
  // then is similar to "done", but then can take mulitple callbacks
  // that means it can take both done and fail at the same time
  .then(function (response) {
    // will contain cllient side artist objects
    var artists = [];
    // create client side artist objects
    // push to array
    for (var i = 0; i < response.length; i++) {
      artists.push(new Artist(response[i]));
    }
    return artists;
  }).fail(function (response) {
    console.log("Artist fetch failed");
  })

  return request;
}
