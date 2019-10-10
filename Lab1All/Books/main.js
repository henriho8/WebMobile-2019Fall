
$(document).ready(function () {

  $("#form").submit(function(x){
    // Page will auto refresh instead of taking input when search button is pressed, this line is to stop that from happening
    x.preventDefault();

    var search = $("#books").val();
    if(search === '') {

      //console.log('this works');
      alert("Please enter something!")
    }

    else {
      // Creating empty variables
      var bookUrl = '';
      var bookImg = '';
      var bookTitle = '';
      var bookAuthor = '';
      //var bookPrice = '';

      // Sending get request to api using jquery
      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(answer){

        //console.log('this works');
        // For loop
        for(x = 0; x < answer.items.length; x++) {
          // Getting title of the book searched
          bookTitle=$('<h5 class="center-align darkgrey-text">' + answer.items[x].volumeInfo.title + '</h5>');
          // Getting the author of the book searched
          bookAuthor=$('<h5 class="center-align darkgrey-text"> By: ' + answer.items[x].volumeInfo.authors + '</h5>');

          //bookPrice=$('<h5 class="center-align black-text">' + answer.items[i].retailPrice.amount + ' </h5>');

          // Getting the image of the book searched
          bookImg=$('<img class="aligning card z-depth-3" id="dynamic"><br><a href=' + answer.items[x].volumeInfo.infoLink + '>' +
            '<button id="buttonimage" class="btn blue aligning">Read More</button></a>');



          bookUrl= answer.items[x].volumeInfo.imageLinks.thumbnail;

          // Attaching the book image url
          bookImg.attr('src',bookUrl);

          // Adding to result div in html
          bookTitle.appendTo("#searchresult");
          bookAuthor.appendTo("#searchresult");
          bookImg.appendTo("#searchresult");
          //bookPrice.appendTo("#result");

        }

      });

    }
  });

  // Prevents auto submission of form
  return false;

});
