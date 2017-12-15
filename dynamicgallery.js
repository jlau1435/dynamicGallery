
var pictureArray = ["pic1.jpg", "pic2.jpeg", "pic3.jpeg", "pic4.jpg", "pic5.jpg", "pic6.jpeg", "picture7.jpeg", "picture8.jpeg", "picture9.jpg"];

var altName = [
    "Railroad tracks", 
    "Dock to the sunset", 
    "Spring rain", 
    "Sun rais in the forest", 
    "Poppy field sunset", 
    "Daisies in the meadow",
    "Water",
    "After the Rain",
    "Fall Colors"
];

var length = pictureArray.length;


 
    
 // SLIDER
    
var sliderIndex = 0;
    
var currentSliderImage = pictureArray[sliderIndex];
    
    
    var currentSlider = "<img src=\"Images/" + pictureArray[sliderIndex] + "\">";
    
    $("#currentPicture").append(currentSlider);
    
    
    

    
   $("#previous").click( function(e) {
       sliderIndex = sliderIndex - 1;
       
       if (sliderIndex < 0){
           sliderIndex = length -1;
       }
       
       console.log(sliderIndex);
       
       currentSliderImage = pictureArray[sliderIndex];

       $("#currentPicture").html("<img src='Images/" + currentSliderImage + "' height='600' width='800'>"
        );
        
    }  ); 




   $("#next").click( function(e) {
       sliderIndex = sliderIndex + 1;
       
       if (sliderIndex >= length){
           sliderIndex = 0;
       }
       
        console.log(sliderIndex);
       
       currentSliderImage = pictureArray[sliderIndex];

       $("#currentPicture").html("<img src='Images/" + currentSliderImage + "' height='600' width='800'>"
        );
        
    }  ); 






    
    
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
