// Problem: clicking on image leads to dead end.
// Solution: create an overlay with the large image.

//overlay code to be added later
var $overlay=$('<div id="overlay"></div>');
//image code to add to overlay
var $image = $("<img>");
// caption code to add to overlay
var $caption = $("<p></p>");

//adding image to overlay using variable
$overlay.append($image);
//adding caption to overlay
$overlay.append($caption);

//2. Add overlay to body
$("body").append($overlay);



//1. Capture the click event on an image link, show overlay
$(".lightbox").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //  1.2 Update overlay with the large image
  $image.attr("src", imageLocation);
  $overlay.show();
    //  1.3 Get child's alt atribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//3. when overlay is clicked, hide the overlay

$overlay.click(function(){
  $overlay.hide();
})