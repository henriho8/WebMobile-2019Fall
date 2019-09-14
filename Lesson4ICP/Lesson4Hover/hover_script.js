/*Name this external file hover_script.js*/

function upDate(previewPic){
  /* In this function you should
     1) change the url for the background image of the div with the id = "image"
     to the source file of the preview image

     2) Change the text  of the div with the id = "image"
     to the alt text of the preview image
     */
  /* Return the value of src and alt of previewPic*/
  var src = previewPic.getAttribute("src");
  var alt = previewPic.getAttribute("alt");

  /* Find element id 'image' and return src background image */
  document.getElementById('image').style.backgroundImage = "url('" + src + "')";

  /* Change inner HTML to alt */
  document.getElementById('image').innerHTML = alt;


}

function unDo(){
  /* In this function you should
 1) Update the url for the background image of the div with the id = "image"
 back to the orginal-image.  You can use the css code to see what that original URL was

 2) Change the text  of the div with the id = "image"
 back to the original text.  You can use the html code to see what that original text was
 */


  undo = document.getElementById('image');

  /* Return empty background */
  undo.style.backgroundImage = "url('')";

  /* Change inner HTML to the string */
    document.getElementById('image').innerHTML = "Hover over an image below to display here";

}
