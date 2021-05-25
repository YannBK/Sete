


//TODO scroll smooth jusqu'à une ancre ... tout marche... sur Chrome (et les autres?) il faut permettre le smooth scrolling (ça évite de se prendre la tête 2h parce que le scroll n'est pas smooth du tout) => Chrome dans la barre url :  chrome://flags/#smooth-scrolling ; Firefox ; about:preferences . MAIS il y a plus simple...dans CSS html{scroll-behavior:smooth;}...


 
/*  const target = document.getElementById('princLocalisation') //cible
button = document.getElementById('acces'); //btn

button.addEventListener('click', function(){

target.scrollIntoView({
  block: 'start',
  behavior: 'smooth',
  inline: 'nearest'
});

});   */

/*  button = document.getElementById('acces'); //btn
function scrollToTargetAdjusted(){
    var element = document.getElementById('princLocalisation');
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}
button.addEventListener('click', scrollToTargetAdjusted); 
 */

/*  const link = document.getElementById('acces');
const anchor = document.getElementById('princLocalisation');
 
link.addEventListener('click', e => {
   e.preventDefault();
 
   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   const rect = anchor.getBoundingClientRect();
 
   // Pour se placer un peu au-dessus, choisir un nombre
   const diff = 80;
   
   scroll({
      top: rect.top + scrollTop - diff,
      behavior: 'smooth'
   });
}); 
 */


//TODOliste déroulante et hover sur les liens touristiques
/* 
const region = document.querySelector('#laRegion');
const regions = document.getElementsByClassName('region');
const btnRegion = document.getElementById('laRegion');
const hoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display = "inline-block";
        btnRegion.classList.add('page1');
    }
}
const removeHoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display = "none";
        btnRegion.classList.remove('page1');
    }
}
//eventListeners
function apparition() {
    for (let i = 0; i < regions.length; i++) {
        region.addEventListener("mouseenter", hoverRegions)
        region.addEventListener("mouseleave", removeHoverRegions)
    }
}
function constance() {
    for (let i = 0; i < regions.length; i++) {
        regions[i].addEventListener("mouseenter", hoverRegions)
        regions[i].addEventListener("mouseleave", removeHoverRegions)
    }
} 
apparition();
constance(); 
*/
//TODO-------------enlever les class active et la rajouter seulement sur l'élément cliqué...la base-------------------------
/* const clickNoRegions = () => {
    for (let i = 0; i < liens.length; i++) {
        liens[i].classList.remove('active');
		this.liens[i].classList.add('active');
    }
} 
function clique() {
	clickNoRegions();
}
clique();
 */
//-----------------------------------
 const liens = document.getElementsByClassName('lienNav');
 const liensCont = document.getElementById('Contact');
 
function clique() {
for (let j = 0; j < liens.length; j++) {
  liens[j].addEventListener("click", function() {
    let current = document.getElementsByClassName(" active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", ""); //? pourquoi [0] =>pcq y en a qu'1
    }
	liensCont.classList.remove('contactActive'); 
    this.className += " active"; //? d'où le this fait référence au btn cliqué?
  });
}}

//bouton contact actif
function goo(){
	liensCont.addEventListener("click", function() {
		liensCont.classList.add('contactActive');
  });
}

goo();
clique();
//TODO----------------comprendre la différence et pourquoi ça marche ou pas ----------------------


// ------------------------------------------Diapo 
//Array d'images
const Images = ["Fichiers/sete/1_Vue_mer.jpg",
	"Fichiers/sete/2_Mont_Saint_Clair.jpg",
	"Fichiers/sete/3_Mont_Saint_Clair.JPG",
	"Fichiers/sete/4_chambre_cabine.JPG",
	"Fichiers/sete/5_salon_vue_entree.JPG",
	"Fichiers/sete/6_cuisine.JPG",
	"Fichiers/sete/7_entrée_vue_salon.JPG",
	"Fichiers/sete/8_salle_eau.JPG",
	"Fichiers/sete/9_cuisine_été.JPG",
	"Fichiers/sete/10_cuisine_veranda.jpg",
	"Fichiers/sete/11_terrasse.JPG",
	"Fichiers/sete/12_environnement 1.jpg",
	"Fichiers/sete/13_environnement 2.jpg",
	"Fichiers/sete/14_les_canaux.jpg",
	"Fichiers/sete/15_veranda.jpg",
	"Fichiers/sete/16_véranda_cuisine.jpg",
	"Fichiers/sete/17_veranda-terrasse.jpg",
	"Fichiers/sete/18_table.jpg",
	"Fichiers/sete/19_lit_1.jpg",
	"Fichiers/sete/20_lit_2.jpg",
	"Fichiers/sete/21_résidence.jpg",
	"Fichiers/sete/22_résidence2.jpg",
	"Fichiers/sete/23_salon_cuisine.jpg"];
let arrLen = Images.length - 1

//changement automatique + manuel

let speed = 2000;
let i = 0;
let b;
let object_timer;

function autoSlide(imgName) {
	if (document.images) {
		document.getElementById(imgName).src = Images[i];
		i++;
		if (i > arrLen) { i = 0; }
		b = imgName;
		objet_timer = setTimeout('autoSlide(b)', speed);
	}
	play.disabled = true;
}

function manualSlide(direction) {
	arret();
	play.disabled = false;
	if (document.images) {
		i = i + direction
		if (i > arrLen) {
			i = 0
		}
		if (i < 0) {
			i = arrLen
		}
		document.Slide.src = Images[i]
	}
}

//arreter le defilement
function arret() {
	clearTimeout(objet_timer);
	play.disabled = false;
}

//boutons de commande
const prevBtn = document.getElementById('prev-btn');
prevBtn.addEventListener('click', () => manualSlide(-1));

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => manualSlide(1));

const stop = document.getElementById('stop');
stop.addEventListener('click', () => arret());

const play = document.getElementById('play');
play.addEventListener('click', () => autoSlide('Slide'));

autoSlide('Slide')

// effet hover sur l'image
const divHover = document.querySelector('#divSlide');
const buttonDiv = document.getElementsByClassName('btn');

const hoverDiv = () => {
	for (let i = 0; i < buttonDiv.length; i++) {
		buttonDiv[i].classList.add('hoverDiv');
	}
}

const removeHoverDiv = () => {
	for (let i = 0; i < buttonDiv.length; i++) {
		buttonDiv[i].classList.remove('hoverDiv');
	}
}

divHover.addEventListener("mouseenter", hoverDiv)
divHover.addEventListener("mouseleave", removeHoverDiv)