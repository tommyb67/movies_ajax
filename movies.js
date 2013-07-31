var response = "";

$(function() {

  $('form').submit(function(event){
    console.log(event)
    // all the code in here will run
    console.log('form button was clicked');
    // this stops the form from being submitted
    var input = $('#input').val();
    var url = "http://www.omdbapi.com/?s=" + input;
    $.ajax({
        type: 'get',
        url: url,
        dataType: 'json'
      }).done(function(data){
      console.log(data);
      console.log('im done');
      // list all of the title results of the movies
      $('body').append('<div id="main"></div>');
      for(var i = 0; i < data.length; i++);

      // append the titles to the movies with links

      // go back to ombd for all of the movie details

      // append the full detail of the movie on the page
    })
    return false;
  })
})

// Code to go back for full movie detail
$('#search').click(function(event){
  var movieTitle = $('input').val();
  var searchString = "http://www.omdbapi.com/?t="
  $.ajax ({
    url: searchString + movieTitle,
    type: 'get',
    dataType: 'json'
  }).done(function(data){
    console.log(data);
  })
})



// var response = $.ajax({
//   type: 'get',
//   url: url
// }).done(function(data){
//   console.log('im done');
//   console.log(data);
// }).fail(function(data) {
//   console.log('im failing');
//   console.log(data.errorText);
// }).always(function(data){
//   console.log('I always run');
// });