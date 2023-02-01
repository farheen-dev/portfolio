// import * as THREE from 'three';

// let camera, scene, renderer, cube;
// let container = document.getElementById("new1");

// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
//     renderer = new THREE.WebGLRenderer({alpha: true, antialias:true});
//     renderer.setSize( container.offsetWidth, container.offsetHeight );
//     container.appendChild( renderer.domElement );
    
//     const geometry = new THREE.BoxGeometry( 2, 2, 2 );
//     const texture = new THREE.TextureLoader().load( "/my_portfolio/assets/img/txt2.jpg" );
//     const material = new THREE.MeshBasicMaterial( { map: texture } );
//     cube = new THREE.Mesh( geometry, material );
//     scene.add( cube );
    
//     camera.position.z = 5;
// }

// function animate() {
// 	requestAnimationFrame( animate );

// 	// cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }

// function onWindowResize() {
// 	// Camera frustum aspect ratio
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	// After making changes to aspect
// 	camera.updateProjectionMatrix();
// 	// Reset size
// 	renderer.setSize(container.offsetWidth, container.offsetHeight);
// }

// window.addEventListener('resize', onWindowResize, false);

// init()
// animate();



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
