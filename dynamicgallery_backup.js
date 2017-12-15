
var pictureArray = ["pic1.jpg", "pic2.jpeg", "pic3.jpeg", "pic4.jpg", "pic5.jpg", "pic6.jpeg"];

var altName = [
    "Railroad tracks", 
    "Dock to the sunset", 
    "Spring rain", 
    "Sun rais in the forest", 
    "Poppy field sunset", 
    "Daisies in the meadow"];

var length = pictureArray.length;



 
    
 // SLIDER
    
var sliderIndex = 0;
    
var currentSliderImage = pictureArray[sliderIndex];
    
    
    var currentSlider = "<img src=\"Images/" + pictureArray[sliderIndex] + "\">";
    
    $("#currentPicture").append(currentSlider);
    
    
    
    
    
    
    
// DYNAMIC GALLERY
  

for(var i = 0; i < length; i = i+1) {
    
  var picture = "<img src=\"Images/" + pictureArray[i] + " \"  alt=\" " + altName[i] + " \"  height=\"300\" width=\"400\">";
    
var linkImage = picture;
var pictureListItem = "<li id=\"image-" + i + "\">" + linkImage + "</li>";
    
$("body").css("background-color", "gray") 
   $("#mainbox").append(pictureListItem);
    
console.log (picture);
}

for (var i =0; i< pictureArray.length; i = i + 1) {
    
   
   $("#image-" + i + " img").click( function(e) {
        
       
var currentImage = $(this).attr("src");
       
var currentAltName = $(this).attr("alt");
       
      
       $("#lightbox").css("display", "block");
       
       console.log(currentImage);
        
       
       $("#lightbox").html("<img src=\" " + currentImage + " \"  alt=\" " + currentAltName + " \"  height=\"600\" width=\"800\">"
        );
        
        $("#lightbox img").click (function(e){
            
            
            $("#lightbox").css("display", "none");
            
        } );
        
    }  );  
   
}
