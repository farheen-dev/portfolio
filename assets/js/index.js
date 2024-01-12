///////////////////////////////
// For Typing part of HTML
let typed = new Typed(".auto-type", {
  strings : ["a web developer", "a full stack developer",  "a self learner", "an independent researcher"], 
  typeSpeed:150,
  backSpeed:150,
  loop:true
})
///////////////////////////////


///////////////////////////////
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Adding event listener on scroll even tfor fab button
window.addEventListener("scroll", function(){
  myBtn.style.display = window.scrollY > 20 ? 'block' : 'none';
} )

//Adding event listener onclick event for fab button
mybutton.addEventListener("click", function() {
   topFunction()
});
///////////////////////////////
