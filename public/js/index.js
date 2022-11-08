
document.getElementsByClassName("creator")[0].addEventListener("mouseenter",function (){
  document.getElementsByClassName("creator")[0].classList.toggle("trans");
  document.getElementsByClassName("artical-over-img")[0].classList.toggle("show");
});

document.getElementsByClassName("creator")[0].addEventListener("mouseleave",function (){
  document.getElementsByClassName("creator")[0].classList.toggle("trans");
  document.getElementsByClassName("artical-over-img")[0].classList.toggle("show");
});

for (let i = 0; i < document.getElementsByClassName("js-logo").length; i++) {
  document.getElementsByClassName("js-logo")[i].addEventListener("mouseenter",function (){
    document.getElementsByClassName("js-logo")[i].classList.toggle("img-b");
  });
  document.getElementsByClassName("js-logo")[i].addEventListener("mouseleave",function (){
    document.getElementsByClassName("js-logo")[i].classList.toggle("img-b");
  });
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");
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
}

setInterval(
  function(){ plusSlides(1); },
  10000
);
