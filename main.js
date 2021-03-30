window.addEventListener("scroll", movingTitle);
window.addEventListener('load', delayHeader());

function movingTitle(){
  var scrollInfo= window.pageYOffset;
  var moveLeft = document.querySelectorAll(".move-left")[0];
  moveLeft.style.transform = `translateX(-${scrollInfo *0.0035}%)`;
  
  var moveLeft1 = document.querySelectorAll(".move-left")[1];
  moveLeft1.style.transform = `translateX(-${scrollInfo *0.02}%)`;
  var moveRight = document.querySelectorAll(".move-right")[0];
  moveRight.style.transform = `translateX(${scrollInfo *0.0035}%)`;
  var moveRight = document.querySelectorAll(".move-right")[1];
  moveRight.style.transform = `translateX(${scrollInfo *0.015}%)`;
  var moveImg = document.querySelector("#moveImg");
  moveImg.style.transform = `translateY(${scrollInfo *0.025}%)`;

  
    var titleCollection = document.querySelectorAll(".moving-up");
    var screenDimension = window.innerHeight;

  for (var i = 0; i < titleCollection.length ; i++){
    var elements = titleCollection[i];
    var elemPosition = elements.getBoundingClientRect().top ;
   
    
    
    if( elemPosition  < screenDimension  ){
      elements.style.animation = "animate 2s"
   
  }
    
  }

  var movingLine = document.querySelectorAll('.line');
  for (var i = 0; i < movingLine.length ; i++){
    let elements = movingLine[i];
    var elemPosition = elements.getBoundingClientRect().top ;
  
    if( elemPosition  < screenDimension  ){
      
        elements.style.animation = "mover-line 3s";
       
   
  }
    
  }

  var image = document.querySelector('img');
  var imgPosition = image.getBoundingClientRect().top;

 if( imgPosition  < screenDimension  ){
      
        image.style.animation = "image-opacity 7s";
       
   
  }
 
}

function delayHeader(){
  
  setTimeout(()=>{
   var allInfo = document.querySelectorAll('.info');
   allInfo.forEach(elem =>elem.style.display = 'flex')
  },2500)

};