$(document).ready(function () {
              // We will use this for adding our jQuery or scripts
	var $overlay = $('<div id="overlay"></div>');
	var $image = $('<img src="img/zoomap.jpg">');
	var $button = $('<a href="img/zoomap.pdf" ID="button" class="btn btn-primary btn-lg btn-block active" role="button">Click here to download a map of our zoo!</a>');
	
	$("#button").click(function(event){
	  event.preventDefault();
	  $overlay.append($image);
	  $overlay.append($button);
	  $("body").append($overlay);
	  
	  //Show the overlay.
	  $overlay.show();
	  
	});
	
	$overlay.click(function(){
	//Hide the overlay
	$overlay.hide();
});

});