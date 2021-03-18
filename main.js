window.addEventListener("scroll", function(){
  var scrollInfo= window.pageYOffset;
  var moveLeft = document.querySelectorAll(".moveLeft")[0];
  moveLeft.style.transform = `translateX(-${scrollInfo *0.025}%)`;
  
  var moveLeft1 = document.querySelectorAll(".moveLeft")[1];
  moveLeft1.style.transform = `translateX(-${scrollInfo *0.005}%)`;
  var moveRight = document.querySelectorAll(".moveRight")[0];
  var moveRight = document.querySelectorAll(".moveRight")[1];
  moveRight.style.transform = `translateX(${scrollInfo *0.015}%)`;
  var moveImg = document.querySelector("#moveImg");
  moveImg.style.transform = `translateY(${scrollInfo *0.025}%)`;
})