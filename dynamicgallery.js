var pictureArray = ["pic1.jpg", "pic2.jpeg", "pic3.jpeg", "pic4.jpg", "pic5.jpg", "pic6.jpeg"];

var altName = [
    "Railroad tracks", 
    "Dock to the sunset", 
    "Spring rain", 
    "Sun rais in the forest", 
    "Poppy field sunset", 
    "Daisies in the meadow"];

var length = pictureArray.length;

for (var i = 0; i < length; i = i+1) {
    
  var picture = "<img src=\"Images/" + pictureArray[i] + " \"  alt=\" " + altName[i] + " \"  height=\"300\" width=\"400\">";
    
   var linkImage ="<a href=\" images/" + pictureArray[i] +" \">" + picture + "</a>";
  
    var pictureListItem = "<li>" + linkImage + "</li>";
    
    console.log (picture);
    
    $("body").css("background-color", "gray");

    
 $("#mainbox").append(pictureListItem);
    
console.log (picture);
}