var slideIndex = 1;
var slideIndex2 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);

next1 = document.getElementById("next1");
prev1 = document.getElementById("prev1");
slider = document.getElementsByClassName("demo");
slider2 = document.getElementsByClassName("demo--2");

for(var i = 0; i<6;i++){
  (function(){
    var j = i + 1;
    slider[i].addEventListener("click", function(){ currentSlide(j); });
    slider2[i].addEventListener("click", function(){ currentSlide2(j); });
    console.log(slider2[i]);
  }());
}

next1.addEventListener("click", function(){plusSlides(1); });
prev1.addEventListener("click", function(){plusSlides(-1); });

next2 = document.getElementById("next2");
prev2 = document.getElementById("prev2");

next2.addEventListener("click", function(){plusSlides2(1); });
prev2.addEventListener("click", function(){plusSlides2(-1); });

// Next/previous controls
function plusSlides(n) {
  console.log('In the function');
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  console.log("n= " + n);
  showSlides2(slideIndex2 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides--2");
  var dots = document.getElementsByClassName("demo--2");
  var captionText = document.getElementById("caption--2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}