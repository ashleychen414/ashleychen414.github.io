// Create a submit handler for the meme form
$(".meme-form").submit(function() {
  event.preventDefault();
  let memeinput = $(".meme-input").val();
  let xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+memeinput+"&api_key=TnDD2BZnim7Ktte1fmgvT6KIru8mwHzE&limit=5")
  xhr.done(function(data) {
    let memes = data.data
    memes.forEach (function(element, index){
      console.log(element)
      $('.meme-list').append(`<li><video src=${element.images.looping.mp4} type="video/mp4" autoplay></video></li>
      `)
    })
    
  });

});
// Do all of the following inside of this submit handler function...

// Stop the page from refreshing when the form is submitted  (event.preventDefault())

// Get the value of meme-input and save as a variable

// Use the JavaScript example at https://developers.giphy.com/docs/ to get the
// results from the http://api.giphy.com/v1/gifs/search endpoint (exactly as in example) but changing in your API key (you will need to register for API key)

// Use your knowledge of objects and arrays to get the list of five memes

// Swap out Ryan Goesling for your input term using string concatenation

// Use a forEach loop to append a list element containing a video to meme-list for each meme video
// hint: <li><video src='+ looping gif image path here + ' type="video/mp4" autoplay></video></li>

//API Key: TnDD2BZnim7Ktte1fmgvT6KIru8mwHzE
